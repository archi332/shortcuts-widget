import React, { ComponentProps, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Providers from "@/components/Providers";
import { isAddress } from "viem";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import SwapWidget from "@ensofinance/shortcuts-widget";

import logoUrl from "./logo_black_white.png";

import "@rainbow-me/rainbowkit/styles.css";
import "./App.css";

const EnsoApiKey = import.meta.env.VITE_ENSO_API_KEY;

const loadConfig = async () => {
  try {
    const response = await fetch("/config.json");
    if (!response.ok) throw new Error("Failed to load config.json");
    return await response.json();
  } catch (error) {
    console.error("Error loading config.json:", error);
    return {};
  }
};

function App() {
  const [config, setConfig] = useState<Record<string, string>>({});
  const location = useLocation();
  const props = useMemo(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const tokenInParam = searchParams.get("tokenIn");
    const tokenOutParam = searchParams.get("tokenOut");
    const chainIdParam = searchParams.get("chainId");

    const props: ComponentProps<typeof SwapWidget> = {
      apiKey: EnsoApiKey,
    };

    if (chainIdParam) {
      props.chainId = parseInt(chainIdParam);
      if (isAddress(tokenInParam)) props.tokenIn = tokenInParam;
      if (isAddress(tokenOutParam)) props.tokenOut = tokenOutParam;
    }

    return props;
  }, [location]);

  useEffect(() => {
    loadConfig().then(setConfig);
  }, []);

  useEffect(() => {
    if (!config || Object.keys(config).length === 0) return;

    console.log("Updating title and favicon with config:", config);

    // Set the title of the page from the environment variable
    if (config?.VITE_APP_TITLE) {
      document.title = `ENSO | ${config.VITE_APP_TITLE}`;
    }
    // Set the favicon of the page from the environment variable
    if (config?.VITE_APP_LOGO_URL) {
      const favicon = document.querySelector("link[rel='icon']");
      if (favicon instanceof HTMLLinkElement) {
        favicon.href = config.VITE_APP_LOGO_URL;
      }
    }
  }, [config]);

  return (
    <Providers>
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          gap: "10px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "1%",
            left: "0%",
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <img src={logoUrl} alt={"Enso"} style={{ height: "50px" }} />

          <ConnectButton />
        </div>

        <SwapWidget {...props} enableShare indicateRoute adaptive />
      </div>
    </Providers>
  );
}

export default App;

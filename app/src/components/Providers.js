import { jsx as _jsx } from "react/jsx-runtime";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { base, mainnet, arbitrum, bsc, linea, avalanche, optimism, zksync, gnosis, polygon, berachain, } from "viem/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
const berachainWithIcon = {
    ...berachain,
    iconUrl: "https://assets.coingecko.com/coins/images/25235/large/BERA.png?1738822008",
};
const config = getDefaultConfig({
    appName: "My RainbowKit App",
    projectId: "YOUR_PROJECT_ID",
    chains: [
        mainnet,
        base,
        arbitrum,
        berachainWithIcon,
        zksync,
        optimism,
        bsc,
        avalanche,
        gnosis,
        polygon,
        linea,
    ],
});
const queryClient = new QueryClient();
const Providers = ({ children }) => {
    return (_jsx(WagmiProvider, { config: config, children: _jsx(QueryClientProvider, { client: queryClient, children: _jsx(RainbowKitProvider, { children: children }) }) }));
};
export default Providers;

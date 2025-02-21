import axios from "axios"

const NEXT_PUBLIC_TEAM_ID = '';
const logoUrl = '';
const publicApiKey = '';
const baseUrl = 'https://api.vercel.com';

async function get(uri) {
  try {
    const response = await axios.get(uri, {
      headers: {
        'Authorization': `Bearer ${publicApiKey}`,
      },
      params: {
        teamId: NEXT_PUBLIC_TEAM_ID,
      }
    })
    return response?.data;
  } catch (e) {
    if (e?.response?.data) {
      throw new Error(`request to '${uri}' failed with:\n ${JSON.stringify(e.response.data, null, 2)}`)
    }
    throw e
  }
}

async function del(uri) {
  try {
    const response = await axios.delete(uri, {
      headers: {
        'Authorization': `Bearer ${publicApiKey}`,
      },
      params: {
        teamId: NEXT_PUBLIC_TEAM_ID,
      }
    })
    return response?.data;
  } catch (e) {
    if (e?.response?.data) {
      throw new Error(`request to '${uri}' failed with:\n ${JSON.stringify(e.response.data, null, 2)}`)
    }
    throw e
  }
}

async function post(uri, body = {}) {
  // const uri = 'http://localhost:10002/test'
  try {
    const response = await axios.post(uri, body, {
      headers: {
        'Authorization': `Bearer ${publicApiKey}`,
      },
      params: {
        teamId: NEXT_PUBLIC_TEAM_ID,
      },
    });

    return response?.data;
  } catch (e) {
    if (e?.response?.data) {
      throw new Error(`request to '${uri}' failed with:\n ${JSON.stringify(e.response.data, null, 2)}`)
    }
    throw e
  }
}

const projectsApi = {
  createProject: async (title) => {

    const createProjectPayload = {
      "name": title,
      "environmentVariables": [
        {
          "key": "VITE_APP_TITLE",
          "target": ["production", "development"],
          "value": title,
          "type": "encrypted",
        },
      ],
    }
    const response = await post("https://api.vercel.com/v9/projects", createProjectPayload)

    return response
  },
  deleteProject: async (name) => {
    return await del(`https://api.vercel.com/v9/projects/${name}`)
  },
  getProjects: async (name) => {
    return await get(`https://api.vercel.com/v9/projects/${name}`)
  },
  getDomain: async (name) => {
    const response = await get(`https://api.vercel.com/v9/projects/${name}/domains`)
    return response
  },
  addDomain: async (name, domain) => {
    const response = await post(
      `https://api.vercel.com/v9/projects/${name}/domains`,
      {name: domain + '.vercel.app'},
      {
        params: {
          teamId: NEXT_PUBLIC_TEAM_ID,
        },
      },
    )
    return response
  },
  deleteDomain: async (name, domain) => {
    const response = await del(`https://api.vercel.com/v9/projects/${name}/domains/${domain}`)
    return response
  },
  addEnvironmentVariable: async (projectName, key, value) => {
    const payload = {
      key,
      target: ["production", "development"],
      value,
      type: "encrypted",
    }
    const response = await post(`https://api.vercel.com/v9/projects/${projectName}/env`, payload)
    return response
  },
  deployProjectFromGithub: async (name) => {
    const payload = {
      project: name,
      name: name + '-deployment',
      target: 'production',
      gitSource: {
        ref: "feat/vercel_deployment",
        // repoId: "927107225", // Repository id for https://github.com/EnsoBuild/shortcuts-widget
        // repoId: "R_kgDON6D4FQ", // Repository node_id for https://github.com/archi332/shortcuts-widget
        repoId: "933296149", // Repository id for https://github.com/archi332/shortcuts-widget
        type: "github",
      },
    }
    const response = await post("https://api.vercel.com/v13/deployments", payload)
    return response
  },
}


async function run() {
  const name = process.argv[2];
  const subdomain = process.argv[3];
  if (!name || !subdomain) {
    throw new Error('Please provide name and subdomain\n node run_vercel_deploy_sample.js <name> <subdomain>\n');
  }
  const envConfig = [NEXT_PUBLIC_TEAM_ID, logoUrl, publicApiKey, baseUrl];
  if (envConfig.some((env) => !env)) {
    throw new Error('Please provide environment configs in the execution file')
  }
  const data = {
    name,
    subdomain,
  }
  const projectName = data.name
    .replace(/ /g, "-")
    .toLowerCase()
  console.time('deployment process')
  // Check API, retrieve project
  // const project = await projectsApi.getProjects('asdasdasdasdasdasdasd-w2bw9biz69rjgpwww53sjq4e6yp1')
  // console.log(`\n\x1b[41m project ==> `, project, `\x1b[0m\n`)

  // STEP-1: Create Project
  const project = await projectsApi.createProject(projectName)
  console.log(`\n\x1b[41m project ==> `, project, `\x1b[0m\n`)

  // STEP-2: Add new subdomain to the project
  const addDomainResponse = await projectsApi.addDomain(projectName, data.subdomain)
  console.log(`\n\x1b[41m isSuccess ==> `, addDomainResponse, `\x1b[0m\n`)

  // STEP-3: If subdomain is not available, delete the project
  if (!addDomainResponse?.name) {
    const deleteProjectResponse = await projectsApi.deleteProject(projectName)
    console.log(`\n\x1b[41m deleteProjectResponse ==> `, deleteProjectResponse, `\x1b[0m\n`)
    throw new Error("Subdomain unavailable")
  }

  // STEP-4: Add project to Firebase
  // skip in a scope of this script

  // STEP-5: Add logo if selected template | in a scope of this script it will not be chosen by user. Let's just provide some pre-defined
  const addEnvironmentVariableResponse = await projectsApi.addEnvironmentVariable(projectName, "VITE_APP_LOGO_URL", logoUrl)
  console.log(`\n\x1b[41m addEnvironmentVariableResponse ==> `, addEnvironmentVariableResponse, `\x1b[0m\n`)

  // STEP-6: Upload files
  // skip in a scope of this script

  // STEP-7: Deploy application
  const deployProjectFromGithubResponse =  await projectsApi.deployProjectFromGithub(projectName)
  console.log(`\n\x1b[41m deployProjectFromGithubResponse ==> `, deployProjectFromGithubResponse, `\x1b[0m\n`)
  console.timeEnd('deployment process')
}

run()
  .then(() => {
    console.log('done')
  })
  .catch((e) => {
    console.error(e || 'Failed without message output')
  });

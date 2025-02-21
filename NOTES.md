## Full deployment output:

```bash
~/P/e/shortcuts-widget (feat/vercel_deployment|●1✚2) $ node run_vercel_deploy_sample.mjs test-deployment2 test-deployment2-subdomain

 project ==>  {
  accountId: 'team_zJLFIXOxMJLmhFGb6KjAffDq',
  autoExposeSystemEnvs: true,
  autoAssignCustomDomains: true,
  autoAssignCustomDomainsUpdatedBy: 'system',
  buildCommand: null,
  createdAt: 1739651877408,
  devCommand: null,
  directoryListing: false,
  env: [
    {
      key: 'VITE_APP_TITLE',
      target: [Array],
      configurationId: null,
      createdAt: 1739651877355,
      updatedAt: 1739651877355,
      createdBy: 'QOcO22KamgJVHxAKuMisWQKq',
      updatedBy: null,
      id: 'w7qUxA6S4NW11MUI',
      type: 'encrypted',
      value: 'gj1KgiBQ5tCsWu03gT88RqzbzooJKfQMq08Rj1JoUDcRy56Hf3+t7uUVrIHgwGaA'
    }
  ],
  framework: null,
  gitForkProtection: true,
  gitLFS: false,
  id: 'prj_yk2VB0dFQhoyCZygnK5jts9ITxdQ',
  installCommand: null,
  lastRollbackTarget: null,
  lastAliasRequest: null,
  name: 'test-deployment2',
  nodeVersion: '22.x',
  outputDirectory: null,
  productionDeploymentsFastLane: true,
  publicSource: null,
  defaultResourceConfig: {
    fluid: false,
    functionDefaultRegions: [ 'iad1' ],
    functionDefaultTimeout: 300,
    functionDefaultMemoryType: 'standard',
    functionZeroConfigFailover: false,
    allowServerlessConcurrency: false,
    elasticConcurrencyEnabled: false
  },
  resourceConfig: {
    functionDefaultRegions: [ 'iad1' ],
    functionDefaultMemoryType: 'standard'
  },
  rootDirectory: null,
  serverlessFunctionRegion: 'iad1',
  skewProtectionMaxAge: 43200,
  sourceFilesOutsideRootDirectory: true,
  ssoProtection: { deploymentType: 'prod_deployment_urls_and_all_previews' },
  updatedAt: 1739651877408,
  live: false,
  gitComments: { onCommit: false, onPullRequest: true },
  latestDeployments: [],
  targets: {}
} 


 isSuccess ==>  {
  name: 'test-deployment2-subdomain.vercel.app',
  apexName: 'vercel.app',
  projectId: 'prj_yk2VB0dFQhoyCZygnK5jts9ITxdQ',
  redirect: null,
  redirectStatusCode: null,
  gitBranch: null,
  customEnvironmentId: null,
  updatedAt: 1739651878202,
  createdAt: 1739651878202,
  verified: true
} 


 addEnvironmentVariableResponse ==>  {
  type: 'encrypted',
  value: '08CYPUzqCvhB0tx+BHh28iLcJv8IM5TLiATeEwHjdhcaU4eSXWBzDmE+DlMHH0qlK87hybACPLL897793pHRgAMgf8aeeKga8Jxou0L+O8Es5CJ9IWh7bhijLZphtoOO8CTCM8/ovihb1XGzr7ZEUAN8AhmG/pVyfCpiSbGvWniiAAyAgV0tmW+taBaOFk3HwI4uHycBWMkqzZepGFNsOJJKKiBL+Xv4mY8X0uspZZc=',
  target: [ 'production', 'development' ],
  configurationId: null,
  id: 'rcgYkDnFxXCx5NrI',
  key: 'VITE_APP_LOGO_URL',
  createdAt: 1739651878818,
  updatedAt: 1739651878818,
  createdBy: 'QOcO22KamgJVHxAKuMisWQKq',
  updatedBy: null
} 


 deployProjectFromGithubResponse ==>  {
  alias: [
    'test-deployment2-selecto.vercel.app',
    'test-deployment2-git-feat-verceldeployment-selecto.vercel.app'
  ],
  aliasAssigned: false,
  automaticAliases: [
    'test-deployment2-selecto.vercel.app',
    'test-deployment2-git-feat-verceldeployment-selecto.vercel.app'
  ],
  bootedAt: 1739651880433,
  buildingAt: 1739651880433,
  buildSkipped: false,
  createdAt: 1739651880433,
  creator: {
    uid: 'QOcO22KamgJVHxAKuMisWQKq',
    username: 'aeremenko-selectogloba'
  },
  gitSource: {
    ref: 'feat/vercel_deployment',
    repoId: 933296149,
    type: 'github',
    sha: '23283856723ec7148a9fa95c62dedd3a0e3be7ae'
  },
  id: 'dpl_2f1BpCGMh5jprYCi4f1pDE2nXPok',
  isFirstBranchDeployment: true,
  name: 'test-deployment2-deployment',
  meta: {
    githubCommitAuthorName: 'YeremenkoA',
    githubCommitMessage: '[vercel deployment] update config',
    githubCommitOrg: 'archi332',
    githubCommitRef: 'feat/vercel_deployment',
    githubCommitRepo: 'shortcuts-widget',
    githubCommitSha: '23283856723ec7148a9fa95c62dedd3a0e3be7ae',
    githubDeployment: '1',
    githubOrg: 'archi332',
    githubRepo: 'shortcuts-widget',
    githubRepoOwnerType: 'User',
    githubCommitRepoId: '933296149',
    githubRepoId: '933296149',
    githubRepoVisibility: 'public',
    githubCommitAuthorLogin: 'archi332',
    branchAlias: 'test-deployment2-git-feat-verceldeployment-selecto.vercel.app'
  },
  originCacheRegion: 'iad1',
  project: {
    id: 'prj_yk2VB0dFQhoyCZygnK5jts9ITxdQ',
    name: 'test-deployment2',
    framework: null
  },
  public: false,
  readyState: 'QUEUED',
  regions: [ 'iad1' ],
  status: 'QUEUED',
  target: 'production',
  team: {
    id: 'team_zJLFIXOxMJLmhFGb6KjAffDq',
    name: 'Selecto',
    slug: 'selecto'
  },
  type: 'LAMBDAS',
  url: 'test-deployment2-46yurbhqm-selecto.vercel.app',
  version: 2,
  previewCommentsEnabled: true,
  lambdas: [
    {
      id: 'bld_193rf7hlr',
      createdAt: 1739651881252,
      entrypoint: '.',
      readyState: 'READY',
      readyStateAt: 1739651881252,
      output: []
    }
  ],
  aliasAssignedAt: null,
  build: {
    env: [
      'CI',
      'VERCEL',
      'VERCEL_ENV',
      'VERCEL_TARGET_ENV',
      'TURBO_REMOTE_ONLY',
      'TURBO_RUN_SUMMARY',
      'TURBO_DOWNLOAD_LOCAL_ENABLED',
      'NX_DAEMON',
      'TURBO_CACHE',
      'VERCEL_URL',
      'VERCEL_GIT_PROVIDER',
      'VERCEL_GIT_PREVIOUS_SHA',
      'VERCEL_GIT_REPO_SLUG',
      'VERCEL_GIT_REPO_OWNER',
      'VERCEL_GIT_REPO_ID',
      'VERCEL_GIT_COMMIT_REF',
      'VERCEL_GIT_COMMIT_SHA',
      'VERCEL_GIT_COMMIT_MESSAGE',
      'VERCEL_GIT_COMMIT_AUTHOR_LOGIN',
      'VERCEL_GIT_COMMIT_AUTHOR_NAME',
      'VERCEL_GIT_PULL_REQUEST_ID',
      'TURBO_PLATFORM_ENV',
      'VITE_APP_TITLE',
      'VITE_APP_LOGO_URL',
      'VERCEL_DEPLOYMENT_ID',
      'VERCEL_PROJECT_ID',
      'VERCEL_BRANCH_URL',
      'VERCEL_PROJECT_PRODUCTION_URL',
      'VERCEL_SKEW_PROTECTION_ENABLED',
      'VERCEL_DISCOVER_FOLDER_SIZES',
      'VERCEL_STORE_SOURCE_DEPLOYMENT_ON_CACHE',
      'VERCEL_NEXT_BUNDLED_SERVER',
      'VERCEL_EDGE_OTEL_COLLECTOR',
      'VERCEL_SERVERLESS_FUNCTION_FAILOVER',
      'USE_RUST_EDGE_LAYER_LATEST',
      'VERCEL_IGNORE_BUILD_STEP_PACKAGE_MANAGER_DETECT',
      'VERCEL_ENABLE_NPM_DEFAULT',
      'VERCEL_EDGE_ON_SERVERLESS_NODE',
      'VERCEL_NODE_BRIDGE_COMPRESS_MULTI_PAYLOADS',
      'VERCEL_ENABLE_FUNCTION_WARMING',
      'VERCEL_USE_BYTECODE_CACHING',
      'VERCEL_RETRY_ON_MISSING_RESPONSE_BATON',
      'VERCEL_COMPRESS_SERVERLESS_RESPONSE',
      'VERCEL_SET_REQUESTED_AT_PRODUCTION_ON_DEPLOYMENT',
      'VERCEL_ENABLE_REGIONALIZED_ISR',
      'VERCEL_COMPRESSED_ISR_BILLING',
      'VERCEL_EDGE_MIDDLEWARE_MEMORY_SIZE',
      'VERCEL_EDGE_FUNCTIONS_MAX_DURATION',
      'ENABLE_VC_BUILD',
      'VERCEL_BUILD_OUTPUTS_EDGE_FUNCTION',
      'VERCEL_EDGE_FUNCTIONS_REGIONAL_INVOCATION',
      'VERCEL_EDGE_FUNCTIONS_EMBEDDED_SOURCEMAPS',
      'VERCEL_EDGE_FUNCTIONS_STRICT_MODE',
      'USE_OUTPUT_FOR_EDGE_FUNCTIONS',
      'NEXT_PRIVATE_MULTI_PAYLOAD',
      'VERCEL_RICHER_DEPLOYMENT_OUTPUTS',
      'VERCEL_EDGE_SUSPENSE_CACHE',
      'VERCEL_SERVERLESS_SUSPENSE_CACHE',
      'VERCEL_BUILD_MONOREPO_SUPPORT',
      'VERCEL_USE_EDGE_FUNCTIONS_BRIDGE_LATEST',
      'VERCEL_ENABLE_NODE_COMPATIBILITY',
      'VERCEL_FORCE_EDGE_FUNCTIONS_REDEPLOY',
      'VERCEL_USE_ONLY_STREAMING_LAMBDA',
      'VERCEL_USE_STREAMING_PRERENDER',
      'VERCEL_DEPLOYMENT_ROUTES_BUILD_OUTPUT_V1',
      'VERCEL_DEPLOYMENT_ROUTES_CLEAN',
      'VERCEL_ENABLE_EXTENDED_FALLBACK_PAYLOAD',
      'VERCEL_WAKE_UP_DEPLOYMENT'
    ]
  },
  builds: [
    { src: 'app/dist/**', use: '@vercel/static' },
    { src: 'widget/dist/**', use: '@vercel/static' }
  ],
  createdIn: 'sfo1',
  env: [
    'VERCEL',
    'VERCEL_ENV',
    'VERCEL_TARGET_ENV',
    'TURBO_REMOTE_ONLY',
    'TURBO_RUN_SUMMARY',
    'TURBO_DOWNLOAD_LOCAL_ENABLED',
    'NX_DAEMON',
    'TURBO_CACHE',
    'VERCEL_URL',
    'VERCEL_GIT_PROVIDER',
    'VERCEL_GIT_PREVIOUS_SHA',
    'VERCEL_GIT_REPO_SLUG',
    'VERCEL_GIT_REPO_OWNER',
    'VERCEL_GIT_REPO_ID',
    'VERCEL_GIT_COMMIT_REF',
    'VERCEL_GIT_COMMIT_SHA',
    'VERCEL_GIT_COMMIT_MESSAGE',
    'VERCEL_GIT_COMMIT_AUTHOR_LOGIN',
    'VERCEL_GIT_COMMIT_AUTHOR_NAME',
    'VERCEL_GIT_PULL_REQUEST_ID',
    'TURBO_PLATFORM_ENV',
    'VITE_APP_TITLE',
    'VITE_APP_LOGO_URL',
    'VERCEL_DEPLOYMENT_ID',
    'VERCEL_PROJECT_ID',
    'VERCEL_BRANCH_URL',
    'VERCEL_PROJECT_PRODUCTION_URL',
    'VERCEL_SKEW_PROTECTION_ENABLED'
  ],
  functions: null,
  inspectorUrl: 'https://vercel.com/selecto/test-deployment2-deployment/2f1BpCGMh5jprYCi4f1pDE2nXPok',
  isInConcurrentBuildsQueue: false,
  isInSystemBuildsQueue: true,
  ownerId: 'team_zJLFIXOxMJLmhFGb6KjAffDq',
  plan: 'pro',
  projectId: 'prj_yk2VB0dFQhoyCZygnK5jts9ITxdQ',
  projectSettings: {
    buildCommand: null,
    devCommand: null,
    commandForIgnoringBuildStep: null,
    installCommand: null,
    outputDirectory: null,
    speedInsights: { id: '9IEENdvh4GrBmZ0RyBkQ35g28PP', hasData: false },
    webAnalytics: { id: 'JjdaBt9qt2c8Qf5dGu2Ocsytj' }
  },
  routes: [
    { src: '^/app/dist(?:/(.*))$', headers: [Object], continue: true },
    {
      src: '^/widget/dist(?:/(.*))$',
      headers: [Object],
      continue: true
    },
    { handle: 'filesystem' },
    { src: '^/app/dist(?:/(.*))$', dest: '/app/dist/$1', check: true },
    {
      src: '^/widget/dist(?:/(.*))$',
      dest: '/widget/dist/$1',
      check: true
    },
    {
      src: '^/assets(?:/(.*))$',
      dest: '/app/dist/assets/$1',
      check: true
    },
    { src: '^(?:/(.*))$', dest: '/app/dist/index.html', check: true }
  ],
  config: {
    version: 1,
    secureComputePrimaryRegion: null,
    secureComputeFallbackRegion: null,
    functionTimeout: 15,
    functionType: 'standard',
    functionMemoryType: 'standard'
  }
} 

deployment process: 4.706s
done
```

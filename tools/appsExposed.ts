interface ModuleExposes {
  [key: string]: string
}

const appsExposed: ModuleExposes = {
  './ProfileRoutes': './src/app/RoutesApp.tsx',
}

export default appsExposed

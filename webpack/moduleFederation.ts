import { container } from 'webpack'
import {
  moduleFederationConfig,
  moduleFederationSharedByReact,
  registerApps,
} from '@utfprfabricadesoftware/utfpr-tools-react'

import packageJson from '../package.json'
import appsConfig from '../tools/appsConfig'

const { ModuleFederationPlugin } = container

function moduleFederation() {
  const name = 'utfpr_profile_mfe'

  return new ModuleFederationPlugin({
    ...moduleFederationConfig(name, {
      remotes: registerApps(appsConfig),
      shared: moduleFederationSharedByReact(packageJson.dependencies),
    }),
    library: {
      type: 'var',
      name,
    },
    exposes: {
      './ProfileRoutes': './src/app/RoutesApp.tsx',
    },
  })
}

export default moduleFederation

import { HotModuleReplacementPlugin, Configuration, EnvironmentPlugin } from 'webpack'
import merge from 'webpack-merge'

import commonConfig from './webpack.common'
import envLocal from '../tools/environment'

interface ConfigurationDev extends Configuration {
  devServer: {
    [key: string]: unknown
  }
}

const port = 3300

const devConfig: ConfigurationDev = {
  mode: 'development',
  devtool: 'hidden-source-map',
  devServer: {
    historyApiFallback: true,
    open: true,
    port,
  },
  output: {
    publicPath: `http://localhost:${port}/`,
    clean: true,
  },
  plugins: [new EnvironmentPlugin(envLocal), new HotModuleReplacementPlugin()],
}

export default merge(commonConfig, devConfig)

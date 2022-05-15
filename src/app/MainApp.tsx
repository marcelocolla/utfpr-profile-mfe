import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { ThemeStyles } from '@utfprfabricadesoftware/utfpr-lib-ui-react'

import RoutesApp from './RoutesApp'
import { useMockApp } from './useMockApp'

const MainApp = (): JSX.Element => {
  useMockApp()

  return (
    <React.StrictMode>
      <ThemeStyles />

      <BrowserRouter>
        <Switch>
          <RoutesApp />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default MainApp

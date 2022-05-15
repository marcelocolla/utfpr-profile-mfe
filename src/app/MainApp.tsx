import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import RoutesApp from './RoutesApp'
import { useMockApp } from './useMockApp'

const MainApp = (): JSX.Element => {
  useMockApp()

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <RoutesApp />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default MainApp

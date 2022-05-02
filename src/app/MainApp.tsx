import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import RoutesApp from './RoutesApp'

const MainApp = (): JSX.Element => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default MainApp

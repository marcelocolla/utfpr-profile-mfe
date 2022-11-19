import React from 'react'

import { RouteProps } from 'react-router-dom'

const HomePageLazy = React.lazy(() => import('pages/Home'))
const RegisterPageLazy = React.lazy(() => import('pages/Register'))

export const getRoutesMap = (basename = '/usuario'): RouteProps[] => {
  return [
    {
      exact: true,
      path: `/usuario/:tipo`,
      component: RegisterPageLazy,
    },
    {
      exact: true,
      path: basename,
      component: HomePageLazy,
    },
  ]
}

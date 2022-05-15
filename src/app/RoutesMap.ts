import React from 'react'

import { RouteProps } from 'react-router-dom'

const HomePageLazy = React.lazy(() => import('pages/Home'))
const RegisterPageLazy = React.lazy(() => import('pages/Register'))

export const getRoutesMap = (basename = '/profile'): RouteProps[] => {
  return [
    {
      exact: true,
      path: basename,
      component: HomePageLazy,
    },
    {
      exact: true,
      path: `${basename}/:tipo`,
      component: RegisterPageLazy,
    },
    {
      path: '*',
      component: HomePageLazy,
    },
  ]
}

import React from 'react'

import { RouteProps } from 'react-router-dom'

const HomePageLazy = React.lazy(() => import('pages/Home'))
const RegisterPageLazy = React.lazy(() => import('pages/Register'))

export const getRoutesMap = (basename = '/profile'): RouteProps[] => {
  return [
    {
      exact: true,
      path: `/profile/:tipo`,
      component: RegisterPageLazy,
    },
    {
      exact: true,
      path: basename,
      component: HomePageLazy,
    },
    // {
    //   path: '*',
    //   component: HomePageLazy,
    // },
  ]
}

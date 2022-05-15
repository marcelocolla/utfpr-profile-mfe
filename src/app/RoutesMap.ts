import React from 'react'

import { RouteProps } from 'react-router-dom'

const HomePageLazy = React.lazy(() => import('pages/Home'))

export const getRoutesMap = (_basename = ''): RouteProps[] => {
  return [
    // {
    //   exact: true,
    //   path: `${basename}/`,
    //   component: HomePageLazy,
    // },
    {
      path: '*',
      component: HomePageLazy,
    },
  ]
}

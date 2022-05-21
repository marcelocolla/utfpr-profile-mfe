import React from 'react'
import { useHistory } from 'react-router-dom'
import { Header } from '@utfprfabricadesoftware/utfpr-lib-ui-react'

import useUserStore from 'shared/utfpr-core-shared-mfe/UserStore'
import { Layout, Content } from './PageLayout.styles'

type PageLayoutProps = {
  home?: boolean
  title: string
  children: React.ReactNode
}

export const PageLayout = React.memo(({ title, home, children }: PageLayoutProps) => {
  const history = useHistory()
  const user = useUserStore?.()

  function handleSignOut() {
    user?.resetUser()

    history.push(user?.redirectAuth || '/login')
  }

  return (
    <Layout>
      <Header header={title} home={home} signOut={handleSignOut} />

      <Content>{children}</Content>
    </Layout>
  )
})

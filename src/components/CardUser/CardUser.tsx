import React from 'react'

type CardUserProps = {
  name?: string
  matricula: string
}

import { Card } from './CardUser.styles'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const imgAvatar = require('assets/images/avatar.png')

export const CardUser = ({ name = '', matricula }: CardUserProps) => {
  return (
    <Card>
      <div>
        <img src={imgAvatar} alt="Avatar" />
      </div>
      <strong>{name}</strong>
      <span>
        Matrícula: <strong>{matricula}</strong>
      </span>
    </Card>
  )
}

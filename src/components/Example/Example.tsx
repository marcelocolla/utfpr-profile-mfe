import React from 'react'

import { ExampleProps } from './Example.types'

export const Example = ({ children }: ExampleProps): JSX.Element => {
  return (
    <div>
      <h6>Example components</h6>
      <aside>{children}</aside>
    </div>
  )
}

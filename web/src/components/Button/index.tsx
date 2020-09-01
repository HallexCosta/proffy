import React from 'react'

import { HTMLButton } from './styles'

export interface Props {
  active?: boolean
}

const Button: React.FC<Props> = ({
  active,
  children
}) => {
  if (active) {
    return <HTMLButton active={active}>{children}</HTMLButton>
  } else {
    return <HTMLButton disabled active={active}>{children}</HTMLButton>
  }
}

export default Button
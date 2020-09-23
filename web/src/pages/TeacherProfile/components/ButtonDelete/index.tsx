import React from 'react'
import { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  name: string
}

const ButtonDelete: React.FC<Props> = ({
  label,
  name,
  ...rest
}) => {
  return (
    <Container>
      <button id={name} name={name} {...rest}>{label}</button>
    </Container>
  )
}

export default ButtonDelete
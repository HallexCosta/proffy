import React, { InputHTMLAttributes } from 'react'

import { Group, Button } from './styles'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean | any
  label: string
}

const CheckBox: React.FC<Props> = ({
  checked,
  label,
  ...rest
}) => (
  <Group>
    <Button label={label} checked={checked} {...rest} />
    {label}
  </Group>
)

export default CheckBox
import React, { useState, InputHTMLAttributes } from 'react'

import { InputPasswordContainer, Label, Input, HidePasswordIcon, ShowPasswordIcon } from './styles'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  actived?: boolean
}

const InputPassword: React.FC<Props> = ({
  label,
  name,
  actived,
  ...rest
}) => { 
  const [hidePassword, setHidePassword] = useState(true)

  function handleShowAndHidePassword() {
    setHidePassword(!hidePassword)
  }

  return (
    <InputPasswordContainer name={name} actived={actived}>
      {label && <Label htmlFor={name}>{label}</Label>}
      
      <Input
        type={hidePassword ? 'password' : 'text'}
        id={name}
        name={name}
        {...rest}
      />

      {hidePassword
      ? <ShowPasswordIcon onClick={handleShowAndHidePassword} />
      : <HidePasswordIcon onClick={handleShowAndHidePassword} />}
    </InputPasswordContainer>
  )
}
    
export default InputPassword
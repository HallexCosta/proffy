import React, { InputHTMLAttributes } from 'react'

import { InputBlock, Label, HTMLInput } from './styles'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    label?: string
    actived?: boolean
}

const Input: React.FC<Props> = ({
    label,
    name,
    actived,
    ...rest
}) => { 
    return (
        <InputBlock name={name} actived={actived}>
        {label && <Label htmlFor={name}>{label}</Label>}
        <HTMLInput
            type="text"
            id={name}
            name={name}
            {...rest}
        />
        </InputBlock>
    )
}
    
    export default Input
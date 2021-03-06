import styled from 'styled-components'

import { Props } from '.'

export const InputBlock = styled.div<Props>`
  position: relative; 

  & + & {
    margin-top: 1.4rem;
  }
  
  > label {
    cursor: default;
    font-size: ${props => props.actived ? '1.2rem' : '1.4rem'};
    padding: ${props => props.actived ? '1.6rem' : ' 0 0 0 1.6rem'};
  }

  &:not(:focus-within) > label {
    padding-bottom: ${props => props.actived ? '1.6rem' : '0'};
  }

  > input {
    padding-top: ${props => props.actived ? '1.5rem' : '0'};
  }

  &:focus-within > label {
    padding: 1.6rem;
    font-size: 1.2rem;
    line-height: 2rem;
  }

  &:focus-within > input {
    padding-top: 1.4rem;
  }
`

export const Label = styled.label`
  position: absolute;
  font-size: 1.4rem;

  bottom: 25%;
  padding-left: 1.6rem;

  color: var(--color-placeholder);

  transform-origin: top left;
  transition: all 0.2s ease-out;
`

export const HTMLInput = styled.input`
  width: 100%;
  height: 5.6rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);
  outline: 0;
  padding: 0 1.6rem;
  font: 1.6rem Archivo;
`

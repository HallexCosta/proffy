import styled from 'styled-components'

import { Hide, Show } from '@styled-icons/boxicons-regular'

import { Props } from '.'

export const InputPasswordContainer = styled.div<Props>`
  position: relative; 
  
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

  &:focus-within::after {
    width: 2px;
    height: calc(100% - 2.5rem);
    content: '';
    top: 25%;
    left: 0.4%;
    background: var(--color-primary-light);
    position: absolute;
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

export const Input = styled.input`
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

export const HidePasswordIcon = styled(Hide)`
  width: 2.4rem;
  height: 2.4rem;

  position: absolute;
  margin-top: 1.6rem;
  right: 10%;
  bottom: 25%;

  color: var(--color-primary);
  
  cursor: pointer;
  `
export const ShowPasswordIcon = styled(Show)`
  width: 2.4rem;
  height: 2.4rem;

  position: absolute;
  margin-top: 1.6rem;
  right: 10%;
  bottom: 25%;

  color: var(--color-text-complement);

  cursor: pointer;
`

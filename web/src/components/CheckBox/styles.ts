import styled from 'styled-components'

import { Props } from '.'

import checkIcon from '../../assets/images/icons/check-icon.svg'

export const Group = styled.div`
  display: flex;
`

export const Button = styled.div<Props>`
  display: inline-block;
  
  width: 2.4rem;
  height: 2.4rem;
  
  background: ${props => props.checked ? `url(${checkIcon}) var(--color-secundary) center no-repeat` : '#FFF'};
  border-radius: 8px;
  transition: all 150ms;

  margin-right: 1.6rem;

  cursor: pointer;
`
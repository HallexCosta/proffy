import styled from 'styled-components'

import { Props } from '.'

export const HTMLButton = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 3.6rem;

  padding: 2.5rem 0;

  cursor: ${props => props.active ? 'pointer' : ''};

  color: ${props => props.active ? '#FFF' : 'var(--color-text-complement)'};
  background: ${props => props.active ? 'var(--color-secundary)' : 'var(--color-button-disbabled)'};

  font-weight: 600;
  font: 1.6rem Archivo;
  line-height: 2.6rem;

  border-radius: .8rem;

  outline: 0;
  border: 0;
`
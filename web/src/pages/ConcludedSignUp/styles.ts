import styled from 'styled-components'
import { CheckSquare } from '@styled-icons/bootstrap'

import successBg from '../../assets/images/success-background.svg'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: url(${successBg}) var(--color-primary) center no-repeat;

  text-align: center;

  > a {
    background: var(--color-secundary);
    color: white;

    border-radius: 8px;
    padding: 1.5rem 4rem;

    text-decoration: none;
  }
`

export const SuccessBox = styled(CheckSquare)`
  width: 9rem;
  height: 9rem;

  color: var(--color-secundary);

  margin-bottom: 4rem;
`

export const Title = styled.h1`
  font-size: 5.4rem;
  line-height: 4.2rem;

  font-family: Archivo;
  font-weight: bold;
  color: white;

  margin-bottom: 2.4rem;
`

export const Description = styled.p`
  color: var(--color-text-in-primary);

  margin-bottom: 8rem;
`
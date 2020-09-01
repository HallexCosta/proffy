import styled from 'styled-components'
import { PowerOff } from '@styled-icons/boxicons-regular'

// AT - Avatar
// LG - Logout
// PL - Proffy Logo
// LL - Landing Logo
// WM - Welcome Message
// TC - Total Connection
// BS - Button Study
// BC - Button Classes

// HD - Header
// BD - Body
// FT - Footer

export const Grid = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;

  grid-template-columns: 100%;
  grid-template-rows: 10% 65% 25%;

  grid-template-areas:
    'HD'
    'BD'
    'FT';
`

export const Header = styled.div`
  grid-area: HD;
  background: var(--color-primary-light);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 16rem;

  padding-top: 1.6rem;
`

export const Avatar = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 40px;
    height: 40px;
    margin-right: 1.6rem;
    border-radius: 50%;
  }

  > p {
    color: var(--color-text-in-primary);
    line-height: 3rem;
    font-size: 1.4rem;
  }
`

export const PowerOffIcon = styled(PowerOff)`
  width: 20px;
  height: 20px;

  color: white;

  cursor: pointer;
`

export const SignOutButton = styled.button`
  border: 0;
  outline: 0;

  padding: 1rem;

  background: var(--color-primary-dark);
  border-radius: .8rem;

  cursor: pointer;
`

export const BodyContainer = styled.div`
  grid-area: BD;
  background: var(--color-primary-light);

  padding: 0 16rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled.div`
  > h2 {
    width: 29rem;
    font-weight: 500;
    color: var(--color-text-in-primary);
  } 
`

export const LandingContainer = styled.div``

export const Footer = styled.div`
  grid-area: FT;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 16rem;

`

export const WelcomeMessage = styled.div`  
  display: flex;
  flex-direction: column;
`

export const ConnectionInfo = styled.div`  
  display: flex;

  > p {
    text-align: center;
    max-width: 19rem;
  }
`

export const ButtonsContainer = styled.div`  
  display: flex;
  justify-content: center;

  width: calc(282px + 16px + 301px);

  height: 10.4rem;

  > a {
    width: 30rem;
    height: 10.4rem;

    border-radius: 0.8rem;

    font: 700 2.0rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);

    transition: background-color 0.2s;
  }

  > a:first-child {
    margin-right: 1.6rem;
  }

  > a#study {
    background: var(--color-primary-lighter);
  }

  > a#study:hover {
    background: var(--color-primary-light);
  }
  
  > a#give-classes {
    background: var(--color-secundary);
  }

  > a#give-classes:hover {
    background: var(--color-secundary-dark);
  }

  > a img {
    margin-right: 2.4rem;
  }
`

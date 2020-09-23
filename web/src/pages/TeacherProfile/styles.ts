import styled from 'styled-components'

import { Camera } from '@styled-icons/boxicons-regular'

import successBg from '../../assets/images/success-background.svg'

// HC -> HeaderContainer
// AC -> AvatarContainer
// TF -> Teacher Form

export const Grid = styled.div`
  width: 100%;
  height: 100%;

  display: grid;

  grid-template-areas: 
    'HC'
    'AC'
    'TF';
  
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 10vh 70vh auto;
`

export const HeaderContainer = styled.div`
  grid: HC;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 100%;

    background-color: var(--color-primary-dark);
  }

  > header p {
    color: var( --color-text-in-primary);
    
    margin-top: 2.4rem;
    margin-bottom: 2.2rem;

    font-family: Archivo;
    font-style: normal;
    
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.7rem;
    
    text-align: center;
  }

  > header img {
    width: 4.2rem;
    height: 4.2rem;
    
    margin-top: 2.4rem;
    margin-bottom: 2.2rem;
  }

  > header a img {
    width: 4.2rem;
    height: 4.2rem;

    margin-top: 2.4rem;
    margin-bottom: 2.2rem;
  }
`

export const AvatarContainer = styled.div`
  grid: AC;

  width: 100%;
  height: 100%;

  background: url(${successBg}) var(--color-primary);
`

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 6.4rem;

  > strong {
    color: var(--color-box-base);

    font-family: Archivo;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 25px;

    margin-top: 3.2rem;
  }

  > p {
    color: var(--color-text-in-primary);
    text-align: center;

    margin-top: 1.6rem;
  }
`

export const PhotoContainer = styled.div`
  position: relative;

  > img {
    border-radius: 50%;
    width: 18rem;
    height: 18rem;
  }
`

export const CameraIcon = styled(Camera)`
  position: absolute;
  bottom: 0;
  right: -15%;

  width: 6rem;
  height: 6rem;

  color: var(--color-secundary-dark);
  background-color: var(--color-white);

  border-radius: 50%;
  
  padding: 10px;
`

export const FormContainer = styled.div`
  grid: TF;

  width: 100%;
  height: 100%;

  margin-bottom: 6.4rem;

  > form {
    display: flex;
    flex-direction: column;

    background: var(--color-box-base);

    margin: 0 35rem;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;

    padding: 0 6.4rem;

    margin-top: -5.2rem;
  }

  > form legend {
    display: flex;
    justify-content: space-between;

    margin-top: 5.6rem;

    font-family: Archivo;
    font-style: normal;
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 3.4rem;

    color: var(--color-text-title);

    > button {
      background: none;
      border: 0;
      color: var(--color-primary);
      font: 700 1.6rem Archivo;
      cursor: pointer;
      transition: color .2s;
    }

    > button:hover {
      color: var(--color-primary-dark);
    }
  }

  > form fieldset {
    width: 100%;
    height: 100%;
    border: 0;
  }

  >form fieldset:last-child {
    margin-bottom: 6.4rem;
  }

  > form fieldset label {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 2.4rem;

    color: var(--color-text-complement);
  }

  > form fieldset input {   
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;

    border-radius: 8px;
  }

  > form textarea {
    width: 100%;
    height: 16rem;
    min-height: 8rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    resize: vertical;
    padding: 1.2rem 1.6rem;
    font: 1.6rem Archivo;
  }

  > form footer {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: gray;
  } 

  > footer {
    display: flex;
    align-items: center;

    background-color: var(--color-box-footer);

    margin: 0 30rem;

    border-top: 1px solid var(--color-line-in-white);

    border-bottom-left-radius: .3rem;
    border-bottom-right-radius: .3rem;

    margin-bottom: 8rem;

    height: 13.6rem;

    padding: 0 6.4rem;
    
    > button {
      height: 5.6rem;

      padding: 15px 40px;
    
      background: var(--color-secundary-dark);
      border-radius: 8px;

      color: var(--color-white);

      white-space: nowrap;

      border: 0;
    }
  }

  @media(min-width: 700px) {
    > form {
      margin: 0 30rem;

      margin-top: -5.2rem;
    }
  }
`

export const Separator = styled.div`
  margin-top: 1.6rem;
  margin-bottom: 2.4rem;

  text-align: center; 
  border-bottom: 1px solid var(--color-line-in-white); 
  line-height: 0.1em;
`

export const InputGroup = styled.div`
  display: flex;

  > #name-container {
    margin-right: 3.2rem;
  }
`

export const InputGrid = styled.div`
  display: grid;
  
  grid-template-areas:
    'EI WI';

  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;

  grid-column-gap: 3.2rem;

  > div #email-container {
    grid: EI;
  }

  > div #whatsapp-container {
    grid: WI;
  }

  margin-top: 3.2rem;
`

export const BiographyContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 2.4rem;

  > label {
    margin-right: 1.6rem;
  }

  > p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;


  color: #C1BCCC;
  }
`

// WI - Week Day Input
// FI - From Input
// TI - To Input

export const InputGridHours = styled.div`
  display: grid;
  
  grid-template-areas:
    'WI FI TI';

  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: auto;

  grid-column-gap: 3.2rem;

  > div #week-day-container {
    grid: WI;
  }

  > div #from-container {
    grid: FI;
  }

  > div #to-container {
    grid: TI;
  }

  margin-top: 3.2rem;
`

export const ImportantContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 12rem;

  > img {
    margin-right: 1.6rem;
  }

  > .important-message p {
    color: var(--color-text-complement);

    font-size: 12px;
    line-height: 20px;
  }
`

export const Title = styled.legend`
  font-size: 12px;
  line-height: 20px;

  color: var(--color-primary);
`
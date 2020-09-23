import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  position: relative;

  margin-top: 3.2rem;
  margin-bottom: 3.2rem;

  &:before {
    content: '';
    display: flex;

    background: var(--color-line-in-white);

    height: 2px;
    width: 100%;

    pointer-events: none;
  }

  &:after {
    content: '';
    display: flex;

    background: var(--color-line-in-white);

    height: 2px;
    width: 100%;
    pointer-events: none;
  }

  > button {    
    padding: 0 2.4rem;

    font-family: Archivo;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    border: 0;

    background-color: #fff;
    color: #E33D3D;
    
    white-space: nowrap;

    cursor: pointer;
  }
`
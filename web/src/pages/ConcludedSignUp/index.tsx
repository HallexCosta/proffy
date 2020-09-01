import React from 'react'
import { Link } from 'react-router-dom'

import {
  Container,
  SuccessBox,
  Title,
  Description
} from './styles'

const ConcludedRegister: React.FC = () => (
  <Container>
    <SuccessBox />
    <Title>Cadastro concluído</Title>
    <Description>Agora você faz parte da plataforma da Proffy. <br />Tenha uma ótima experiência.</Description>
    <Link to="/">Fazer login</Link>
  </Container>
)

export default ConcludedRegister
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import {
    Grid,
    Header,
    Avatar,
    SignOutButton,
    PowerOffIcon,
    BodyContainer,
    LogoContainer,
    LandingContainer,
    Footer,
    WelcomeMessage,
    ConnectionInfo,
    ButtonsContainer
} from './styles'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import api from '../../services/api'
import { useAuth } from '../../contexts/auth'

import './styles.css'

const Landing: React.FC = () => {
    const { user, signOut } = useAuth()

    const [totalConnections, setTotalConnections] = useState<number>(0)

    useEffect(() => {
        api.get('connections')
            .then(response => {
                const { total } = response.data
                
                setTotalConnections(total)
            })
    }, [])

    function handleSignOut() {
        signOut()
    }

    return (
        <Grid>
            <Header>
                <Avatar>
                    <img src={user?.photo && user.photo} alt="Proffy" />
                    <p>{user?.name && user.name}</p>
                </Avatar>
                <SignOutButton onClick={handleSignOut}>
                    <PowerOffIcon />
                </SignOutButton>
            </Header>

            <BodyContainer>
                <LogoContainer>
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </LogoContainer>

                <LandingContainer>
                    <img src={landingImg} alt="Landing"/>
                </LandingContainer>
            </BodyContainer>

            <Footer>
                <WelcomeMessage>
                    <p>Seja bem-vindo. </p>
                    <strong>O que deseja fazer?</strong>
                </WelcomeMessage>

                <ConnectionInfo>
                    <p>Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração Roxo" /></p>
                </ConnectionInfo>
                
                <ButtonsContainer>
                    <Link to="/study" id="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </Link>
                    <Link to="/give-classes" id="give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas" />
                        Dar aulas
                    </Link>
                </ButtonsContainer>
            </Footer>
        </Grid>

        // <div id="page-landing">
        //     <button onClick={handleSignOut}>Logout</button>
        //     <div id="page-landing-content" className="container">
        //         <div className="logo-container">
        //             <img src={logoImg} alt="Proffy" />
        //             <h2>Sua plataforma de estudos online.</h2>
        //         </div>

        //         <img
        //             src={landingImg}
        //             alt="Plataforma de estudos"
        //             className="hero-image" 
        //         />

        //         <div className="buttons-container">
        //             <Link to="/study" className="study">
        //                 <img src={studyIcon} alt="Estudar" />
        //                 Estudar
        //             </Link>

        //             <Link to="/give-classes" className="give-classes">
        //                 <img src={giveClassesIcon} alt="Dar aulas" />
        //                 Dar aulas
        //             </Link>
        //         </div>

        //         <span className="total-connections">
        //             Total de {totalConnections} conexões já realizadas
        //             <img src={purpleHeartIcon} alt="Coração roxo" />
        //         </span>
        //     </div>
        // </div>
    )
}

export default Landing
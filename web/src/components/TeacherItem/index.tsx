import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/55293671?s=460&u=053dc2155e236f8590943d52bce9fea037b001f7&v=4" alt="Hállex da Silva Costa" />
                <div>
                    <strong>Hállex da Silva Costa</strong>
                    <span>Desenvolvimento Web</span>
                </div>
            </header>

            <p>
                Estudante de Ánalise e Desenvolvimento de Sistemas, entuasiasta em desenvolvimento Web FullStack com foco no back-end.
                <br /><br />
                Apaixonado pelas tecnologias NodeJS, ReactJS e ReactNative. Amante das boas pratícas sendo elas Clean Architecture, Clean Code e o padrão Package by Feature, visando sempre seguir os princípios de design aplicados pelo S.O.L.I.D, K.I.S.S entre outros princípios.
            </p>

            <footer>
                <p>
                    Preço/hora:
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem
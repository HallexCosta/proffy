import React, { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import { 
  Grid,
  HeaderContainer,
  AvatarContainer,
  Avatar,
  PhotoContainer,
  CameraIconContainer,
  CameraIcon,
  FormContainer,
  Separator,
  InputGroup,
  InputGrid,
  BiographyContainer,
  InputGridHours,
  ImportantContainer,
  Title
} from './styles'


import backIcon from '../../assets/images/icons/back.svg'
import proffyIcon from '../../assets/images/logo.svg'
import warningIcon from '../../assets/images/icons/warning.svg'

import Select from '../../components/Select'

import ButtonDelete from './components/ButtonDelete'

interface ScheduleItem {
  week_day: number
  from: string
  to: string
}

const TeacherProfile = () => {
  const [subject, setSubject] = useState<string>('')

  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([
      { week_day: 0, from: '', to: '' }
  ])

  function handleDeleteNewHours(e: FormEvent, positionRemove: number) {
    e.preventDefault()

    const updatedScheduleItems = scheduleItems.filter((scheduleItem: ScheduleItem, index: number) => {
      return index !== positionRemove
    })

    setScheduleItems(updatedScheduleItems)
  }

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ])
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
        if (index === position) {
            return { ...scheduleItem, [field]: value }
        }

        return scheduleItem
    })

    setScheduleItems(updatedScheduleItems)
  }

  async function handleSaveTeacherProfile(e: FormEvent) {
    e.preventDefault()

    try {
      //await api.post('teacher_profile', {})
      alert('Succcess Save Profile')
    } catch(e) {
      console.error(e)
    }
  }

  return (
    <Grid>
      <HeaderContainer>
        <header>
          <Link to="/"><img src={backIcon} alt="Back" /></Link>
          <p>Meu Perfil</p>
          <img src={proffyIcon} alt="proffy" />
        </header>
      </HeaderContainer>

      <AvatarContainer>
        <Avatar>
          <PhotoContainer>
            <img src="https://ui-avatars.com/api/?name=Hallex+da+Silva+Costa" alt="Teacher Photo" />
            <CameraIconContainer>
              <CameraIcon />
            </CameraIconContainer>
          </PhotoContainer>
          <strong>Hállex da Silva Costa</strong>
          <p>Design Pattern</p>
        </Avatar>
      </AvatarContainer>

      <FormContainer>
        <form onSubmit={e => handleSaveTeacherProfile(e)}>
          <legend>Seus dados</legend>

          <Separator />

          <fieldset>
            <InputGroup>
              <div id="name-container">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" value="Hállex" />
              </div>

              <div id="lastname-container">
                <label htmlFor="lastname">Sobrenome</label>
                <input type="text" id="lastname" value="da Silva Costa" />
              </div>
            </InputGroup>

            <InputGrid>
              <div id="email-container">
                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" value="hallex.costa@hotmail.com" />
              </div>

              <div id="whatsapp-container">
                <label htmlFor="whatsapp">Whatsapp</label>
                <input type="text" id="whatsapp" value="(18) 99788-7240" />
              </div>
            </InputGrid>
              
            <BiographyContainer>
              <label htmlFor="biography">Biográfia</label>
              <p>(Maximo 300 caracteres)</p>
            </BiographyContainer>
            <textarea name="biography" id="biography">
              Estudante de Ánalise e Desenvolvimento de Sistemas, entuasiasta em desenvolvimento Web FullStack com foco no back-end.
              Apaixonado pelas tecnologias NodeJS, ReactJS e ReactNative. Amante das boas pratícas sendo elas Clean Architecture, Clean Code e o padrão Package by Feature, visando sempre seguir os princípios de design aplicados pelo S.O.L.I.D, K.I.S.S entre outros princípios.
            </textarea>
          </fieldset>

          <legend>Sobre a aula</legend>

          <Separator />

          <fieldset>
            <InputGrid>
              <Select
                name="subjects"
                label="Matérias"
                value={subject}
                onChange={e => { setSubject(e.target.value) }}
                options={[
                  { value: 'Artes', label: 'Artes' },
                  { value: 'Biologia', label: 'Biologia' },
                  { value: 'Ciências', label: 'Ciências' },
                  { value: 'Educação fisica', label: 'Educação fisica' },
                  { value: 'Física', label: 'Física' },
                  { value: 'Geografia', label: 'Geografia' },
                  { value: 'História', label: 'História' },
                  { value: 'Matemática', label: 'Matemática' },
                  { value: 'Português', label: 'Português' },
                  { value: 'Quimica', label: 'Quimica' },
                  { value: 'Filosofia', label: 'Filosofia' },
                  { value: 'Sociologia', label: 'Sociologia' }
                ]}
              />

              <div id="cost-container">
                <label htmlFor="cost">Custo da sua hora por aula</label>
                <input type="text" id="cost" value="R$ 80,00" />
              </div>
            </InputGrid>
          </fieldset>

          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem} >
              + Novo horário
            </button>
          </legend>
            
          <Separator />

          <fieldset>
            {scheduleItems.map((scheduleItem: ScheduleItem, index: number) => {
              return (
                <>
                  <InputGridHours key={scheduleItem.week_day}> 
                    <Select
                      name="week_day"
                      label="Dia da semana"
                      value={scheduleItem.week_day}
                      onChange={e => { setScheduleItemValue(index, 'week_day', e.target.value)}}
                      options={[
                        { value: '0', label: 'Domingo' },
                        { value: '1', label: 'Segunda-feira' },
                        { value: '2', label: 'Terça-feira' },
                        { value: '3', label: 'Quarta-feira' },
                        { value: '4', label: 'Quinta-feira' },
                        { value: '5', label: 'Sexta-feira' },
                        { value: '6', label: 'Sábado' }
                      ]}
                    />

                    <div id="from-container">
                      <label htmlFor="from">Das</label>
                      <input
                        type="time"
                        id="from"
                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                        value={scheduleItem.from}
                      />
                    </div>

                    <div id="to-container">
                      <label htmlFor="to">Até</label>
                      <input
                        type="time"
                        id="to"
                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                        value={scheduleItem.to}
                      />
                    </div>
                  </InputGridHours>

                  <ButtonDelete
                    label="Excluir horário"
                    name="delete"
                    onClick={e => handleDeleteNewHours(e, index)}
                  />
                </>
              )
            })}  
          </fieldset>
        </form>     
        <footer>
          <ImportantContainer>
            <img src={warningIcon} />
            <div  className="important-message">
              <Title>Importante</Title>
              <p>Preencha todos os dados corretamente</p>
            </div>
          </ImportantContainer>
          <button>
            Salvar cadastro
          </button>
        </footer> 
      </FormContainer>
      
    </Grid>
  )
}

export default TeacherProfile
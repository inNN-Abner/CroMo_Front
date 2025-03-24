import React, { useEffect, useState } from 'react'
import { ClassroomModal, InfoText } from '~/components/atoms'
import { StyledButtonStyle } from '~/components/atoms/Button/styles'
import { API_URL } from '~/configs/config'

interface Classroom {
  id: number
  tipo: string
  numero: number
}

export const ClassroomSelector: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedClassroom, setSelectedClassroom] = useState<string | null>(null)
  const [classrooms, setClassrooms] = useState<Classroom[]>([])
 /* const classrooms = [
    'Sala 101',
    'Sala 102',
    'Sala 103',
    'Sala 104',
    'Sala 105',
    'Sala 106',
    'Sala 107',
    'Sala 108',
    'Sala 109',
    'Sala 110',
    'Sala 111',
    'Sala 112',
    'Laboratório A',
    'Laboratório B',
    'Laboratório C',
    'Laboratório D']*/

  const handleClassroomSelect = (classroom: string) => {
    setSelectedClassroom(classroom)
  }

  async function loadClassrooms(){
    try{
        const resp = await fetch(`${API_URL}/local`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            const data = await resp.json()
            if (resp.status == 200) {
                setClassrooms(data)
            }
            console.log(resp)
        } catch(e){
            console.log("erro: ", e)
        }
    } 

    useEffect(() => {
        loadClassrooms()
    }, [])

    const classroomsNames = 
    classrooms.map((c)=> ({
      id: c.id,
      name: c.numero ? `${c.tipo} ${c.numero}` : `${c.tipo}`, }))

    return (
      <StyledButtonStyle bdRd='15' wdt='250' mgTop='0' bg='white'
        onPress={() => setModalVisible(true)}
      >
        <InfoText color='brisk' fontSize='18' mgBottom='0' mgLeft='0' alignSelf={'center'}>
          {selectedClassroom ? `${selectedClassroom}` : 'Clique para selecionar'}
        </InfoText>

        <ClassroomModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSelect={handleClassroomSelect}
          options={classroomsNames}
        />
      </StyledButtonStyle>
    )
  }

/*export const CourseSelector: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)

  const courses = [
  'Análise e Desenv. de Sistemas',
  'Comércio Exterior',
  'Desenv. de Software Multiplataforma',
  'Gestão Empresarial',
  'Gestão de Serviço',
  'Logística Aeroportuária',
  'Redes de Computadores' ]

  const handleCourseSelect = (courses: string) => {
  setSelectedCourse(courses)
  }

  return (
    <StyledButtonStyle bdRd='50' wdt='300' hgt='50' mgTop='0' mgLeft='35' bg='white'
      onPress={() => setModalVisible(true)}
    >
      <InfoText color='brisk' fontSize='14' alignSelf='flex-start' mgBottom='0' mgLeft='25'>
        {selectedCourse ? `${selectedCourse}` : 'Clique para selecionar'}
      </InfoText>

      <ClassroomModal
        visible={modalVisible} 
        onClose={() => setModalVisible(false)}
        onSelect={handleCourseSelect}
        options={courses}
      />
    </StyledButtonStyle>
  )
}*/

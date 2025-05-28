import React, { useEffect, useState } from 'react'
import { ClassroomModal, CourseModal, InfoText } from '~/components/atoms'
import { StyledButtonStyle } from '~/components/atoms/Button/styles'
import { opcoesCursos } from '~/../archives/courses'
import { API_URL } from '~/configs/config'
import * as SecureStore from "expo-secure-store"

//Selecionar SALA/LAB
interface Classroom {
  id: number
  tipo: string
  numero: string | null
}

interface ClassroomSelectorProps {
  selectedClassroom: number | null
  setSelectedClassroom: (value: number) => void
}

export const ClassroomSelector: React.FC<ClassroomSelectorProps> = ({ selectedClassroom, setSelectedClassroom }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [classrooms, setClassrooms] = useState<Classroom[]>([])

  const handleClassroomSelect = (classroomId: number) => {
    setSelectedClassroom(classroomId)
    setModalVisible(false)
  }

  async function loadClassrooms() {
    try {
      const token = await SecureStore.getItemAsync("token")
      const resp = await fetch(`${API_URL}/local`, {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          'x-access-token': token || ''
        },
      })

      console.log('Resposta API:', resp)
      const data = await resp.json()
      if (resp.status === 200) setClassrooms(data)
    } catch (e) {
      console.log("erro ao carregar locais:", e)
    }
  }

  useEffect(() => {
    loadClassrooms()
  }, [])

  const classroomsNames = classrooms.map(c => ({
    id: c.id,
    name: c.numero ? `${c.tipo} ${c.numero}` : `${c.tipo}`
  }))

  const selectedLabel = classroomsNames.find(c => c.id === selectedClassroom)?.name
  
  return (
    <StyledButtonStyle bdRd='15' wdt='250' mgTop='0' bg='white'
      onPress={() => setModalVisible(true)}
    >
      <InfoText color='brisk' fontSize='18' mgBottom='0' mgLeft='0' alignSelf={'center'}>
        {selectedClassroom ? `${selectedLabel}` : 'Clique para selecionar'}
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

//Selecionar CURSO
interface CourseSelectorProps {
  visible: boolean
  onClose: () => void
  onSelect: (course: opcoesCursos) => void 
  options: opcoesCursos[]
  userCourse: opcoesCursos
}

export const CourseSelector: React.FC<CourseSelectorProps> = ({ userCourse, onSelect }) => {
  const [modalVisible, setModalVisible] = useState(false)

  const courses = [
    opcoesCursos.ads,
    opcoesCursos.comex,
    opcoesCursos.dsm,
    opcoesCursos.gstS,
    opcoesCursos.gstE,
    opcoesCursos.log,
  ]

return (
  <>
    <StyledButtonStyle bdRd='50' wdt='300' hgt='50' mgTop='5' mgLeft='0' bg='white'
      onPress={() => setModalVisible(true)}
    >
      <InfoText color='brisk' fontSize='14' alignSelf='flex-start' mgBottom='0' mgLeft='25'>
        {userCourse || 'Clique para selecionar'}
      </InfoText>
    </StyledButtonStyle>

    <CourseModal
      visible={modalVisible}
      onClose={() => setModalVisible(false)}
      onSelect={onSelect}
      options={courses}
    />
  </>
)}
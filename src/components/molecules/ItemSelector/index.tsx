import React, { useState } from 'react'
import { ClassroomModal, InfoText } from '~/components/atoms'
import { StyledButtonStyle } from '~/components/atoms/Button/styles'
import { opcoesCursos } from '~/../archives/courses'

export const ClassroomSelector: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedClassroom, setSelectedClassroom] = useState<string | null>(null)

  const classrooms = [
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
    'Laboratório D']

  const handleClassroomSelect = (classroom: string) => {
    setSelectedClassroom(classroom)
  }

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
          options={classrooms}
        />
      </StyledButtonStyle>
    )
  }

interface CourseSelectorProps {
  selectedCourse: string
  onSelect: (course: string) => void
}

export const CourseSelector: React.FC<{ userCourse: string, onSelect: (course: string) => void }> = ({ userCourse, onSelect }) => {
  const [modalVisible, setModalVisible] = useState(false)

  const courses = [
    opcoesCursos.ads,
    opcoesCursos.comex,
    opcoesCursos.dsm,
    opcoesCursos.gstS,
    opcoesCursos.gstE,
    opcoesCursos.log,
  ]

  const handleCourseSelect = (course: string) => {
    onSelect(course)
    setModalVisible(false)
  }

  return (
    <StyledButtonStyle bdRd='50' wdt='300' hgt='50' mgTop='0' mgLeft='35' bg='white'
      onPress={() => setModalVisible(true)}
    >
      <InfoText color='brisk' fontSize='14' alignSelf='flex-start' mgBottom='0' mgLeft='25'>
        {userCourse || 'Clique para selecionar'}
      </InfoText>

      <ClassroomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={handleCourseSelect}
        options={courses}
      />
    </StyledButtonStyle>
  )
}

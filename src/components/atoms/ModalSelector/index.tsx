import React from 'react'
import { Modal } from 'react-native'
import { CloseButton, CloseButtonText, ModalContainer, ModalContent, ModalTitle, OptionButton, OptionText, ScrollableContent } from './styles'
import * as SecureStore from 'expo-secure-store'
import { opcoesCursos } from '~/../archives/courses'

interface ClassroomModalProps {
  visible: boolean
  onClose: () => void
  onSelect: (classroomId: number) => void
  options: { id: number, name: string }[]
}

export const ClassroomModal: React.FC<ClassroomModalProps> = ({ visible, onClose, onSelect, options }) => {
  console.log('Opções de locais no modal:', options)

  return (
    <Modal
      transparent={true}
      animationType='slide'
      visible={visible}
      onRequestClose={onClose}
    >
      <ModalContainer>
        <ModalContent>
          <ModalTitle>Clique para selecionar</ModalTitle>
          <ScrollableContent>
          {options.map((classroom) => (
            <OptionButton
              wdt='250'
              hgt='40'
              key={classroom.id}
              onPress={async () => {
                onSelect(classroom.id)
                await SecureStore.setItemAsync('classroom', classroom.id.toString())
                onClose()
              }}
            >
              <OptionText>{classroom.name}</OptionText>
            </OptionButton>
          ))}
          </ScrollableContent>
          <CloseButton onPress={onClose}>
            <CloseButtonText>Fechar</CloseButtonText>
          </CloseButton>
        </ModalContent>
      </ModalContainer>
    </Modal>
  )
}

interface CourseModalProps {
  visible: boolean
  onClose: () => void
  onSelect: (course: opcoesCursos) => void
  options: opcoesCursos[]
}

export const CourseModal: React.FC<CourseModalProps> = ({ visible, onClose, onSelect, options }) => {
  return (
    <Modal
      transparent={true}
      animationType='slide'
      visible={visible}
      onRequestClose={onClose}
    >
      <ModalContainer>
        <ModalContent>
          <ModalTitle>Selecione o curso</ModalTitle>
          <ScrollableContent>
            {options.map((course) => (
              <OptionButton
                bg='lightBrisk'
                align='center'
                wdt='250'
                hgt='61'
                mgVertical='3'
                key={course}
                onPress={() => {
                  onSelect(course)
                  onClose()
                }}
              >
                <OptionText fontSize='14' >{course}</OptionText>
              </OptionButton>
            ))}
          </ScrollableContent>

          <CloseButton onPress={onClose}>
            <CloseButtonText>Fechar</CloseButtonText>
          </CloseButton>
        </ModalContent>
      </ModalContainer>
    </Modal>
  )
}
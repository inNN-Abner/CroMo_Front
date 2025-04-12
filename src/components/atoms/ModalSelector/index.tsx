import React from 'react'
import { Modal } from 'react-native'
import { CloseButton, CloseButtonText, ModalContainer, ModalContent, ModalTitle, OptionButton, OptionText, ScrollableContent } from './styles'
import * as SecureStore from 'expo-secure-store'

interface ClassroomModalProps {
  visible: boolean
  onClose: () => void
  onSelect: (classroomId: number) => void
  options: { id: number, name: string }[]
}

export const ClassroomModal: React.FC<ClassroomModalProps> = ({ visible, onClose, onSelect, options }) => {
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
              key={classroom.id}
              onPress={async () => {
                onSelect(classroom.id) // agora passa o ID corretamente
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
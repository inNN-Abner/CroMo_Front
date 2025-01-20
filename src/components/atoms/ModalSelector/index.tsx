import React from 'react'
import { Modal } from 'react-native'
import { CloseButton, CloseButtonText, ModalContainer, ModalContent, ModalTitle, OptionButton, OptionText, ScrollableContent } from './styles'

interface ClassroomModalProps {
  visible: boolean
  onClose: () => void
  onSelect: (classroom: string) => void
  options: string[]
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
          {options.map((classroom, index) => (
            <OptionButton
              wdt='250'
              key={index}
              onPress={() => {
                onSelect(classroom)
                onClose()
              }}
            >
              <OptionText>{classroom}</OptionText>
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
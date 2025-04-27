import React, { useState } from 'react'
import { Modal, View } from 'react-native'
import { ModalContainer, Photo, Subcontainer } from '~/components/atoms'
import { imageMap, defaultPhoto } from '~/../archives/photoMapper'
import { ModalContent, ModalTitle, ScrollableContent, OptionButton, OptionText, CloseButton, CloseButtonText } from '~/components/atoms/ModalSelector/styles'
import { CreateModal } from '~/components/molecules'

interface PhotoSelectorModalProps {
  visible: boolean
  onClose: () => void
  onSelect: (photoId: number) => void
  options: number[]
}

export const PhotoSelectorModal: React.FC<PhotoSelectorModalProps> = ({ visible, onClose, onSelect, options }) => {
  const [selected, setSelected] = useState<number | null>(null)

  const rows = []
  for (let i = 0; i < options.length; i += 3) {
    rows.push(options.slice(i, i + 3))
  }

  return (
    <CreateModal visible={visible} bg='white' pdd='0'>
      <ModalTitle mgTop='15'>Escolha uma foto</ModalTitle>

      <ScrollableContent>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={{ flexDirection: 'row' }}>
            {row.map((photoId) => (
              <OptionButton
                key={photoId}
                wdt='105'
                hgt='100'
                bdRd='20'
                style={{
                  borderWidth: selected === photoId ? 1.5 : 0,
                  borderColor: selected === photoId ? 'red' : 'transparent',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onPress={() => {
                  setSelected(photoId)
                  onSelect(photoId)
                  onClose()
                }}
              >
                <Photo 
                  source={imageMap[photoId]} 
                  wdt='50'
                  hgt='50'
                  mgTop='0'
                  mgLeft='0'
                  bdRd='100'
                />
                <OptionText style={{ marginTop: 5, fontSize: 12 }}>
                  Ícone {photoId}
                </OptionText>
              </OptionButton>
            ))}
          </View>
        ))}
      </ScrollableContent>

      <CloseButton onPress={onClose} mgBottom='15' wdt='200'>
        <CloseButtonText>Fechar</CloseButtonText>
      </CloseButton>
    </CreateModal>
  )
}

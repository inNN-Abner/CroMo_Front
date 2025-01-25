import React from 'react'
import { Modal, View } from 'react-native'
import { ModalContainer } from '../../atoms'

interface ModalProps {
    animationType?: 'none' | 'slide' | 'fade'
    transparent?: boolean
    visible?: boolean
    bg?: string
    wdt?: string
    hgt?: string
    bdRd?: string
    pdd?: string
    align?: string
    justify?: string
    children: React.ReactNode
}

export const CreateModal = ({ visible, bg, wdt, hgt, bdRd, pdd, align, justify, children }: ModalProps) => {
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={visible}
        >
        <View
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 0
            }}
        />          
            <ModalContainer
                    bg={bg}
                    wdt={wdt}
                    hgt={hgt}
                    bdRd={bdRd}
                    pdd={pdd}
                    align={align}
                    justify={justify}
                >
                    {children}
            </ModalContainer>
        </Modal>
    )
}
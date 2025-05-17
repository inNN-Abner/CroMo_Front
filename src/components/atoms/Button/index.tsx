import React from 'react'
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import Fontisto from '@expo/vector-icons/Fontisto'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useTheme } from '../../../context/ThemeContext'
import { ButtonTextStyle, StyledButtonStyle, ThemeButtonStyle } from './styles'
import { Subcontainer } from '../Container'
import { Photo } from '../Photo'
import { IconButton } from '../Logo'

interface ButtonProps {
  source?: string
  idFoto?: string
  bg?: string
  color?: string
  fontSize?: string
  align?: string
  justify?: string
  dir?: string
  wdt?: string
  hgt?: string
  mgTop?: string
  mgLeft?: string
  mgRight?: string
  bdRd?: string
  bdWdt?: string
  bdColor?: string
  children?: React.ReactNode
  label?: string
  labelComponent?: React.ReactNode
  hour?: string
  local?: string
  classRoom?: string
  disabled?: boolean
  onPress?: () => void
}

export const StylezedButton = ({ bg, color, fontSize, wdt, hgt, mgTop, mgLeft, mgRight, bdRd, bdWdt, bdColor, label, onPress }: ButtonProps ) => {
    return (
    <StyledButtonStyle
        bg={bg}
        mgTop={mgTop}
        mgLeft={mgLeft}
        mgRight={mgRight}
        hgt={hgt}
        wdt={wdt}
        bdRd={bdRd}
        bdWdt={bdWdt}
        bdColor={bdColor}
        onPress={onPress}
        >
            <ButtonTextStyle
                color={color}
                fontSize={fontSize}
                >
                  {label}
            </ButtonTextStyle>
    </StyledButtonStyle>
    )
}

const ToggleThemeButton = ({ bg, wdt, hgt, mgLeft, mgTop, bdRd }: ButtonProps) => {
  const { toggleTheme, isDark } = useTheme()

  return (
    <ThemeButtonStyle
      bg={bg}
      mgLeft={mgLeft}
      mgTop={mgTop}
      hgt={hgt}
      wdt={wdt}
      bdRd={bdRd}
      onPress={toggleTheme}
    >
      <Subcontainer mgLeft='0' mgTop='0' bg='transparent' align='center' justify='center'>
        <Ionicons name={ isDark ? 'moon' : 'sunny'} size={35} color={ isDark ? 'white' : 'white'}  />
      </Subcontainer>
    </ThemeButtonStyle>
  )
}
export default ToggleThemeButton;

export const AddButton = ({ bg, wdt, hgt, bdRd, mgTop, mgLeft, onPress }: ButtonProps ) => {
  return (
    <StyledButtonStyle
        bg={bg}
        wdt={wdt}
        hgt={hgt}
        bdRd={bdRd}
        mgLeft={mgLeft}
        mgTop={mgTop}
        onPress={onPress}>
        <Ionicons name="add-circle" size={24} color={'white'} />
    </StyledButtonStyle>
  )
}

export const AddButtonText = ({ bg, color, wdt, hgt, bdRd, mgTop, mgLeft, mgRight, fontSize, label, onPress }: ButtonProps ) => {
  return (
    <StyledButtonStyle
      bg={bg}
      wdt={wdt}
      hgt={hgt}
      bdRd={bdRd}
      mgLeft={mgLeft}
      mgRight={mgRight}
      mgTop={mgTop}
      onPress={onPress}>
      <Subcontainer align='center' justify='flex-start' dir='row' bg='brisk' wdt='250' hgt='30' mgTop='0' mgLeft='0' bdRd='10'>
            <Ionicons name="add-circle" size={24} color={'red'} />
              <ButtonTextStyle
                mgLeft='3'
                color={color}
                fontSize={fontSize}>
                {label}
              </ButtonTextStyle>
          </Subcontainer> 
    </StyledButtonStyle>
  )
}

export const CancelButton = ({ bg, color, wdt, hgt, bdRd, mgTop, mgLeft, mgRight, fontSize, label, onPress }: ButtonProps ) => {
  return (
    <StyledButtonStyle
        bg={bg}
        wdt={wdt}
        hgt={hgt}
        bdRd={bdRd}
        mgLeft={mgLeft}
        mgRight={mgRight}
        mgTop={mgTop}
        onPress={onPress}>
          <Subcontainer align='center' justify='center' dir='row' bg='everWhite' wdt='170' hgt='20' mgTop='0' mgLeft='0' bdRd='10'>
              <MaterialIcons name="cancel" size={22} color="#7f0000" />
                  <ButtonTextStyle
                      mgLeft='10'
                      color={color}
                      fontSize={fontSize}>
                      {label}
                  </ButtonTextStyle>
          </Subcontainer>    
    </StyledButtonStyle>
  )
}

export const ChatbotButton  = ({ wdt, hgt, bdRd, mgTop, mgLeft, onPress }: ButtonProps ) => {
  return (
    <ThemeButtonStyle
        bg={'purple'}
        wdt={wdt}
        hgt={hgt}
        bdRd={bdRd}
        mgLeft={mgLeft}
        mgTop={mgTop}
        onPress={onPress}>
        <IconButton />
    </ThemeButtonStyle>
  )
}

export const DayButton = ({ hgt, label, color, bg, onPress }: ButtonProps ) => {
  return (
    <StyledButtonStyle 
        bg={bg}
        bdRd={'5'}
        wdt={'50'}
        hgt={hgt}
        mgTop={'0'}
        onPress={onPress}>
            <ButtonTextStyle
                color={color}
                >
                  {label}
            </ButtonTextStyle>
    </StyledButtonStyle>
  )
}

export const EditButton  = ({ wdt, hgt, bdRd, mgTop, mgLeft, onPress }: ButtonProps ) => {
  return (
    <StyledButtonStyle
        bg={'everWhite'}
        wdt={wdt}
        hgt={hgt}
        bdRd={bdRd}
        mgLeft={mgLeft}
        mgTop={mgTop}
        onPress={onPress}>
        <FontAwesome name="pencil" size={24} color={'black'} />
    </StyledButtonStyle>
  )
}

export const EditInfoButton = ({ bg, color, wdt, hgt, bdRd, mgTop, mgLeft, mgRight, fontSize, label, onPress }: ButtonProps ) => {
  return (
    <StyledButtonStyle
      bg={bg}
      wdt={wdt}
      hgt={hgt}
      bdRd={bdRd}
      mgLeft={mgLeft}
      mgRight={mgRight}
      mgTop={mgTop}
      onPress={onPress}>
      <Subcontainer align='center' justify='flex-start' dir='row' bg='brisk' wdt='250' hgt='30' mgTop='0' mgLeft='0' bdRd='10'>
        <FontAwesome name="pencil" size={24} color={'red'} />
          <ButtonTextStyle
                mgLeft='3'
                color={color}
                fontSize={fontSize}>
                {label}
              </ButtonTextStyle>
          </Subcontainer> 
    </StyledButtonStyle>
  )
}

export const FormButton = ({ bg, color, wdt, hgt, bdRd, mgTop, mgLeft, mgRight, fontSize, label, onPress }: ButtonProps ) => {
  return (
    <StyledButtonStyle
        bg={bg}
        wdt={wdt}
        hgt={hgt}
        bdRd={bdRd}
        mgLeft={mgLeft}
        mgTop={mgTop}
        onPress={onPress}>
        <MaterialCommunityIcons name="form-select" size={30} color={'white'} />
    </StyledButtonStyle>
  )
}

export const ListButtonText = ({ bg, color, wdt, hgt, bdRd, mgTop, mgLeft, mgRight, fontSize, label, onPress }: ButtonProps ) => {
  return (
    <StyledButtonStyle
      bg={bg}
      wdt={wdt}
      hgt={hgt}
      bdRd={bdRd}
      mgLeft={mgLeft}
      mgRight={mgRight}
      mgTop={mgTop}
      onPress={onPress}>
      <Subcontainer align='center' justify='flex-start' dir='row' bg='brisk' wdt='250' hgt='30' mgTop='0' mgLeft='0' bdRd='10'>
            <Ionicons name="list-circle" size={24} color={'red'} />
              <ButtonTextStyle
                mgLeft='3'
                color={color}
                fontSize={fontSize}>
                {label}
              </ButtonTextStyle>
          </Subcontainer> 
    </StyledButtonStyle>
  )
}

export const ListOptionButton = ({ source, align, justify, bdRd, wdt, hgt, mgTop, mgLeft, label, labelComponent, color, bg, fontSize, onPress }: ButtonProps ) => {
  return (
    <StyledButtonStyle 
        justify={justify}
        align={align}
        bdRd={bdRd}
        wdt={wdt}
        hgt={hgt}
        mgTop={mgTop}
        mgLeft={mgLeft}
        bg={bg}
        dir={'row'}
        onPress={onPress}
        >
          <Photo
            hgt='35'
            wdt='40'
            mgLeft='5'
            mgTop='0'
            source={source}
          />

        {labelComponent ? (
          <>{labelComponent}</>
        ) : (
          <ButtonTextStyle
              fontSize={fontSize}
              color={color}
              mgLeft='5'
              style={{
                  flex: 1,
                  flexWrap: 'wrap',
                  maxWidth: '80%'
              }}  >
                {label}
          </ButtonTextStyle>
        )}
    </StyledButtonStyle>
  )
}

export const LogoutButton  = ({ wdt, hgt, bdRd, mgTop, mgLeft, onPress }: ButtonProps ) => {
  return (
    <StyledButtonStyle
        bg={'darkRed'}
        wdt={wdt}
        hgt={hgt}
        bdRd={bdRd}
        mgLeft={mgLeft}
        mgTop={mgTop}
        onPress={onPress}>
        <Ionicons name="log-out" size={36} color={'white'} />
    </StyledButtonStyle>
  )
}

export const PDFButton = ({ bg, color, wdt, hgt, bdRd, mgTop, mgLeft, mgRight, fontSize, label, onPress }: ButtonProps ) => {
  return (
    <StyledButtonStyle
        bg={bg}
        wdt={wdt}
        hgt={hgt}
        bdRd={bdRd}
        mgLeft={mgLeft}
        mgRight={mgRight}
        mgTop={mgTop}
        onPress={onPress}>
          <Subcontainer align='center' justify='center' dir='row' bg='darkRed' wdt='140' hgt='20' mgTop='0' mgLeft='0' bdRd='10'>
            <MaterialIcons name="picture-as-pdf" size={22} color="#FFFFFF" />
              <ButtonTextStyle
                  mgLeft='10'
                  color={color}
                  fontSize={fontSize}>
                  {label}
              </ButtonTextStyle>
          </Subcontainer>
    </StyledButtonStyle>
  )
}

export const RedCancelButton = ({ hgt, wdt, bdRd, mgTop, mgLeft, mgRight, fontSize, label, onPress }: ButtonProps ) => {
  return (
    <StyledButtonStyle
        bg={'darkRed'}
        wdt={wdt}
        hgt={hgt}
        bdRd={bdRd}
        mgLeft={mgLeft}
        mgRight={mgRight}
        mgTop={mgTop}
        onPress={onPress}>
          <Subcontainer align='center' justify='center' dir='row' bg='darkRed' wdt='150' hgt='20' mgTop='0' mgLeft='0' bdRd='10'>
              <MaterialIcons name="cancel" size={22} color="#ffffff" />
                  <ButtonTextStyle
                      mgLeft='5'
                      mgTop='-2'
                      color={'everWhite'}
                      fontSize={fontSize}>
                      {label}
                  </ButtonTextStyle>
          </Subcontainer>    
    </StyledButtonStyle>
  )
}

export const SaveButton = ({ bg, hgt, wdt, bdRd, mgTop, mgLeft, mgRight, fontSize, label, onPress }: ButtonProps ) => {
  return (
    <StyledButtonStyle
        bg={bg}
        wdt={wdt}
        hgt={hgt}
        bdRd={bdRd}
        mgLeft={mgLeft}
        mgRight={mgRight}
        mgTop={mgTop}
        onPress={onPress}>
          <Subcontainer align='center' justify='center' dir='row' bg={bg} wdt='150' hgt='30' mgTop='0' mgLeft='0' bdRd='10'>
              <Fontisto name="check" size={18} color="#ffffff" />
                  <ButtonTextStyle
                    mgLeft='10'
                    mgTop='-1'
                    color={'everWhite'}
                    fontSize={fontSize}>
                    {label}
                  </ButtonTextStyle>
          </Subcontainer>    
    </StyledButtonStyle>
  )
}

export const SetTimeButton = ({ align, justify, bdRd, hgt, wdt, color, bg, mgTop, mgLeft, fontSize, onPress, hour, local }: ButtonProps ) => {
  return (
  <StyledButtonStyle 
      bg={bg}
      mgTop={mgTop}
      mgLeft={mgLeft}
      hgt={hgt}
      wdt={wdt}
      bdRd={bdRd}
      onPress={onPress}
      align={align}
      justify={justify}
      >
        <ButtonTextStyle
            color={color}
            fontSize={fontSize}
            mgLeft='15'
          >
            <Fontisto name="clock" size={15} color='white' />
            {hour}
        </ButtonTextStyle>

        <ButtonTextStyle
            color={color}
            fontSize={fontSize}
            mgLeft='15'
          >
            <Fontisto name="map-marker-alt" size={15} color='white' />
            {local}
        </ButtonTextStyle>
  </StyledButtonStyle>
  )
}

export const TrashButton = ({ bg, wdt, hgt, bdRd, mgTop, mgLeft, onPress }: ButtonProps ) => {
  return (
    <StyledButtonStyle
        bg={bg}
        wdt={wdt}
        hgt={hgt}
        bdRd={bdRd}
        mgLeft={mgLeft}
        mgTop={mgTop}
        onPress={onPress}>
        <Fontisto name="trash" size={24} color="white" />
    </StyledButtonStyle>
  )
}

export const ViewButton = ({ bg, color, wdt, hgt, bdRd, mgTop, mgLeft, mgRight, fontSize, label, onPress }: ButtonProps ) => {
  return (
    <StyledButtonStyle
        bg={bg}
        wdt={wdt}
        hgt={hgt}
        bdRd={bdRd}
        mgLeft={mgLeft}
        mgRight={mgRight}
        mgTop={mgTop}
        onPress={onPress}>
          <Subcontainer align='center' justify='center' dir='row' bg='everWhite' wdt='170' hgt='20' mgTop='0' mgLeft='0' bdRd='10'>
              <MaterialIcons name="summarize" size={22} color="#7f0000" />
                  <ButtonTextStyle
                      mgLeft='10'
                      color={color}
                      fontSize={fontSize}>
                      {label}
                  </ButtonTextStyle>
          </Subcontainer>   
    </StyledButtonStyle>
  )
}

export const ViewCommentButton  = ({ bg, wdt, hgt, bdRd, mgTop, mgLeft, onPress }: ButtonProps ) => {
  return (
    <StyledButtonStyle
        bg={bg}
        wdt={wdt}
        hgt={hgt}
        bdRd={bdRd}
        mgLeft={mgLeft}
        mgTop={mgTop}
        onPress={onPress}>
        <MaterialCommunityIcons name="comment-question" size={17} color={'white'} />
    </StyledButtonStyle>
  )
}

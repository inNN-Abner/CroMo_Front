import React, { useState } from 'react' 
const DarkLogin = require('~/../assets/LoginScreen_Dark.png') 
const LightLogin = require('~/../assets/LoginScreen_Light.png') 
import { StylezedButton } from '~/components/atoms/Button' 
import { useTheme } from '~/context/ThemeContext' 
import { Container, Subcontainer, LogoImage, TextInput, LoginTitle, LoginError, CourseSelector } from '~/components' 
import { Alert, Keyboard, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback } from 'react-native' 
import { API_URL } from '~/configs/config' 
import { opcoesCursos } from '~/../archives/courses'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '~/services/firebase'
import * as SecureStore from 'expo-secure-store' 

export const RegisterScreen = ({ navigation }) => {
  const { isDark } = useTheme() 

  const [nome, setNome] = useState('') 
  const [email, setEmail] = useState('') 
  const [senha, setSenha] = useState('') 
  const [confirmSenha, setConfirmSenha] = useState('') 
  const [selectedCourse, setSelectedCourse] = useState<opcoesCursos | "">("") 
  const [errorMessage, setErrorMessage] = useState('') 
  const [loading, setLoading] = useState(false) 
  const [modalVisible, setModalVisible] = useState(false) 

  const handleCourseSelect = (course: opcoesCursos) => setSelectedCourse(course) 

  const registerUser = async () => {
    if (!nome || !email || !senha || !confirmSenha || !selectedCourse) {
      setErrorMessage("Preencha todos os campos!") 
      return 
    }
  
    if (senha !== confirmSenha) {
      setErrorMessage("As senhas não coincidem!") 
      return 
    }
  
    setErrorMessage('') 
    setLoading(true) 
  
    try {
      // Passo 1: Cria o usuário no Firebase Auth
      const firebaseUser = await createUserWithEmailAndPassword(auth, email, senha) 
      console.log("Usuário criado no Firebase:", firebaseUser.user.uid) 
  
      // Passo 2: Salva no banco via sua API
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: nome,
          email: firebaseUser.user.email, // e-mail validado pelo Firebase
          curso: selectedCourse,
          tipo: 'Aluno',
          idFoto: 37,
          ra: ""
        }),
      }) 
  
      const data = await response.json() 
  
      if (!response.ok) {
        setErrorMessage(data.error || 'Erro ao cadastrar!') 
        console.log("Erro na API:", data) 
        return 
      }
  
      // Passo 3: Salvar no SecureStore local
      await SecureStore.setItemAsync("user", JSON.stringify(data)) 
      Alert.alert("Sucesso!", "Registro concluído.") 
      navigation.navigate('Login') 
  
    } catch (error: any) {
      console.error("Erro ao registrar:", error) 
  
      // Erros Firebase
      switch (error.code) {
        case 'auth/email-already-in-use':
          setErrorMessage("E-mail já em uso!") 
          break 
        case 'auth/invalid-email':
          setErrorMessage("E-mail inválido.") 
          break 
        case 'auth/weak-password':
          setErrorMessage("Senha fraca, mínimo 6 caracteres.") 
          break 
        default:
          setErrorMessage("Erro inesperado. Tente novamente.") 
          break 
      }
    } finally {
      setLoading(false) 
    }
  }
    
  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Container align='center'>
          <Subcontainer align='center' mgLeft='0' mgTop='0'>
            <LogoImage justify='center' mgRight='0' mgTop='50' source={useTheme().isDark ? LightLogin : DarkLogin} />

            <LoginTitle mgTop='-15' alignSelf='flex-start'>
              Nome
            </LoginTitle>

            <TextInput 
              placeholder="Digite seu nome" 
              value={nome} 
              onChangeText={setNome} 
              mgTop='5' 
            />
            
            <LoginTitle mgTop='15' alignSelf='flex-start'>
              E-mail institucional
            </LoginTitle>

            <TextInput 
              placeholder="Digite seu e-mail"
              value={email} 
              onChangeText={setEmail}
              keyboardType='email-address' 
              mgTop='5'
            />

            <LoginTitle mgTop='15' alignSelf='flex-start'> Senha</LoginTitle>
            <TextInput 
              placeholder="Digite sua senha"
              value={senha} onChangeText={setSenha}
              secureTextEntry mgTop='5' 
            />
            
            <LoginTitle mgTop='15' alignSelf='flex-start'>Confirmar senha</LoginTitle>
            <TextInput 
              placeholder="Confirme sua senha" 
              value={confirmSenha} 
              onChangeText={setConfirmSenha} 
              secureTextEntry mgTop='5'
            />
            
            <LoginTitle mgTop='15' alignSelf='flex-start'>Selecionar curso</LoginTitle>
            <CourseSelector
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
              onSelect={handleCourseSelect}
              options={Object.values(opcoesCursos)}
              userCourse={selectedCourse || opcoesCursos.vazio}
            />
            <Subcontainer hgt='50' dir='row' mgLeft='0' align='center' justify='center' >
              {errorMessage ? <LoginError>{errorMessage}</LoginError> : null}
            </Subcontainer>

            <Subcontainer mgLeft='0' mgTop='-15' dir='row' wdt='360' hgt='80' align='center' justify='center'>
              <StylezedButton 
                label="CANCELAR"
                mgTop='0'
                wdt='160'
                onPress={() =>
                  navigation.navigate('Login')} 
              />
              
              <StylezedButton 
                label={loading ? 'AGUARDE...' : 'CADASTRAR'}
                bg='darkGreen'
                mgLeft='10'
                wdt='160'
                mgTop='0'
                onPress={registerUser} 
              />
            </Subcontainer>

          </Subcontainer>
        </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
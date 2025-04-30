import React, { createContext, useContext, useState, useEffect } from 'react'
import * as SecureStore from 'expo-secure-store'

interface User {
  nome: string
  email: string
  teams: string
  curso: string
  idFoto: number
  ra: string
  tipo: string
}

interface UserContextProps {
  user: User | null
  setUser: (user: User) => void
  clearUser: () => void
}

const UserContext = createContext<UserContextProps>({} as UserContextProps)

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUserState] = useState<User | null>(null)

  useEffect(() => {
    const loadUser = async () => {
      const userData = await SecureStore.getItemAsync('user')
      if (userData) {
        const parsedUser: User = JSON.parse(userData)
        console.log("Usuário carregado:", parsedUser)
        setUserState(parsedUser)
      }
    }
    loadUser()
  }, [])

  const setUser = async (newUser: User) => {
    setUserState(newUser)
    console.log("Salvando usuário no SecureStore:", newUser)
    await SecureStore.setItemAsync('user', JSON.stringify(newUser))
  }

  const clearUser = async () => {
    setUserState(null)
    await SecureStore.deleteItemAsync('user')
  }

  return (
    <UserContext.Provider value={{ user, setUser, clearUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
/*import { useEffect, useState } from 'react'
import { API_URL } from '~/configs/config'
import * as SecureStore from 'expo-secure-store'

interface ContactItem {
  id: number
  name: string
  info: string
  photo: any
  type: string
  email: string
  teams: string
}

function mapPhoto(nome: string) {
  switch (nome) {
    case 'Alvo Dombledore':
      return require('../assets/Icon_AlvoDumbledore.png')
    case 'Fílio Flitwick':
      return require('../assets/Icon_FilioFlitwick.png')
    case 'Severo Snape':
      return require('../assets/Icon_SeveroSnape.png')
    case 'Rolanda Hooch':
      return require('../assets/Icon_RolandaHooch.png')
    default:
      return require('../assets/Clock.png') // uma imagem genérica para contatos não previstos
  }
}

function inferType(nome: string) {
  if (nome === 'Severo Snape' || nome === 'Rolanda Hooch') return 'Professor'
  return 'Monitor'
}

export const useContacts = () => {
  const [contacts, setContacts] = useState<ContactItem[]>([])

  useEffect(() => {
    async function loadContacts() {
      try {
        const token = await SecureStore.getItemAsync('token')

        const response = await fetch(`${API_URL}/contato/show`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': token || ''
          }
        })

        const status = response.status
        const resposta = await response.text()

        if (status !== 200) {
          console.log("Erro ao buscar contatos:", status, resposta)
          return
        }

        const data = JSON.parse(resposta)

        if (!Array.isArray(data)) {
          console.log("Resposta inesperada:", data)
          return
        }

        const contatosFormatados = data.map((c: any) => ({
          id: c.id,
          name: c.nome,
          info: `${c.teamsEmail} | ${c.teamsUser}`,
          photo: mapPhoto(c.nome), // função que converte o nome pra imagem
          type: inferType(c.nome), // opcional se quiser classificar por nome
          email: c.teamsEmail,
          teams: c.teamsUser,
        }))

        setContacts(contatosFormatados)
      } catch (e) {
        console.log("Erro ao buscar contatos:", e)
      }
    }

    loadContacts()
  }, [])

  return contacts
}
*/

export default [
    {
      id: 1,
      name: 'Alvo Dombledore',
      info: 'alvo.dumbledore@fatec.sp.gov.br | Alvo.Dumbledore_01',
      photo: require('../assets/Icon_AlvoDumbledore.png'),
      type: 'Monitor',
      email: 'alvo.dumbledore@fatec.sp.gov.br',
      teams: 'Alvo.Dumbledore_01'
    },
    {
      id: 2,
      name: 'Fílio Flitwick',
      info: 'filio.flitwick@fatec.sp.gov.br | Filio.Flitwick_02',
      photo: require('../assets/Icon_FilioFlitwick.png'),
      type: 'Monitor',
      email: 'filio.flitwick@fatec.sp.gov.br',
      teams: 'Filio.Flitwick_02'
    },
    {
      id: 3,
      name: 'Severo Snape',
      info: 'severo.snape@fatec.sp.gov.br | Severo.Snape_01',
      photo: require('../assets/Icon_SeveroSnape.png'),
      type: 'Professor',
      email: 'severo.snape@fatec.sp.gov.br',
      teams: 'Severo.Snape_01'
    },
    {
      id: 4,
      name: 'Rolanda Hooch',
      info: 'roland.hooch@fatec.sp.gov.br | Rolanda.Hooch_02',
      photo: require('../assets/Icon_RolandaHooch.png'),
      type: 'Professor',
      email: 'roland.hooch@fatec.sp.gov.br',
      teams: 'Rolanda.Hooch_02'
    },
]
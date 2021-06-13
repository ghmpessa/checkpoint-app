import { ProfileModel } from '@/domain/models'
import { createContext } from 'react'

type Props = {
  editedUser?: ProfileModel
  setEditedUser?: (editedUser: ProfileModel) => void
}

export default createContext<Props>(null)

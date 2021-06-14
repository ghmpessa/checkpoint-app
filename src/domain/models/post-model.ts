import { ProfileShortModel } from './account-model'

export type PostModel = {
  account: ProfileShortModel
  text: string
  groupId: string
  createdAt: string
  updatedAt: string
  id: string
}
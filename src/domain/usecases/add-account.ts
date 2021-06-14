import { AccountModel } from '../models'

export type AddAccountParams = {
  username: string
  name: string
  email: string
  password: string
  twitch?: string
  steam?: string
}

export interface AddAccount {
  add: (params: AddAccountParams) => Promise<AccountModel>
}

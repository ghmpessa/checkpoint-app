import { AccountModel } from '../models'

export type AddAccountParams = {
  username: string
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export interface AddAccount {
  add: (params: AddAccountParams) => Promise<AccountModel>
}

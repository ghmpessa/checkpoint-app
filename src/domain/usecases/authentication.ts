import { AccountModel } from '@/domain/models'

export type AuthenticationParams = {
  username: string
  password: string
}

export interface Authentication {
  auth: (params: AuthenticationParams) => Promise<AccountModel>
}

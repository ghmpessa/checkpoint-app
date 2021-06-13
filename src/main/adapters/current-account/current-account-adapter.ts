import { AccountModel } from '../../../domain/models'
import { makeAsyncStorageAdapter } from '../../factories/cache/'

export const setCurrentAccountAdapter = async (account: AccountModel): Promise<void> => {
  makeAsyncStorageAdapter().set('@checkpoint:account', account)
}

export const getCurrentAccountAdapter = async (): Promise<AccountModel> => {
  return makeAsyncStorageAdapter().get('@checkpoint:account')
}

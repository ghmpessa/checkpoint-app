import { AsyncStorageAdapter } from '../../../infra/cache/async-storage-adapter'

export const makeAsyncStorageAdapter = (): AsyncStorageAdapter => {
  return new AsyncStorageAdapter()
}

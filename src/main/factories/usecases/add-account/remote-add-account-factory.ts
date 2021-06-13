import { RemoteAddAccount } from '../../../../data/usecases'
import { AddAccount } from '../../../../domain/usecases'
import { makeApiUrl, makeAxiosHttpClient } from '../../http'

export const makeRemoteAddAccount = (): AddAccount => new RemoteAddAccount(makeApiUrl('/register'), makeAxiosHttpClient())

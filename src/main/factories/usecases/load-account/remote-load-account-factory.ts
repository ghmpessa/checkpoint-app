import { RemoteLoadAccount } from '../../../../data/usecases'
import { makeApiUrl, makeAxiosHttpClient } from '../../http'

export const makeRemoteLoadAccount = (): RemoteLoadAccount => new RemoteLoadAccount(makeApiUrl('/account'), makeAxiosHttpClient())

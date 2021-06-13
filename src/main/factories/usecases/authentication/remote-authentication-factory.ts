import { RemoteAuthentication } from '../../../../data/usecases'
import { Authentication } from '../../../../domain/usecases'
import { makeApiUrl, makeAxiosHttpClient } from '../../http'

export const makeRemoteAuthentication = (): Authentication => new RemoteAuthentication(makeApiUrl('/auth'), makeAxiosHttpClient())

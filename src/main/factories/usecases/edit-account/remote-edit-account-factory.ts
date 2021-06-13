import { RemoteEditAccount } from '../../../../data/usecases'
import { makeAuthorizeHttpClientDecorator } from '../../decorators'
import { makeApiUrl } from '../../http'

export const makeRemoteEditAccount = (): RemoteEditAccount => new RemoteEditAccount(makeApiUrl('/account'), makeAuthorizeHttpClientDecorator())
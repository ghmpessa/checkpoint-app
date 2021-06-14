import { RemoteLoadMe } from '../../../../data/usecases'
import { makeAuthorizeHttpClientDecorator } from '../../decorators'
import { makeApiUrl } from '../../http'

export const makeRemoteLoadMe = (): RemoteLoadMe => new RemoteLoadMe(makeApiUrl('/me'), makeAuthorizeHttpClientDecorator())

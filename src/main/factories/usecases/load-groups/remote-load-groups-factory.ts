import { RemoteLoadGroups } from '../../../../data/usecases'
import { makeAuthorizeHttpClientDecorator } from '../../decorators'
import { makeApiUrl } from '../../http'

export const makeRemoteLoadGroups = (): RemoteLoadGroups => new RemoteLoadGroups(makeApiUrl('/groups'), makeAuthorizeHttpClientDecorator())
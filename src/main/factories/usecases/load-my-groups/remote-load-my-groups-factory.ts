import { RemoteLoadMyGroups } from '../../../../data/usecases'
import { makeAuthorizeHttpClientDecorator } from '../../decorators'
import { makeApiUrl } from '../../http'

export const makeRemoteLoadMyGroups = (): RemoteLoadMyGroups => new RemoteLoadMyGroups(makeApiUrl('/me/groups'), makeAuthorizeHttpClientDecorator())
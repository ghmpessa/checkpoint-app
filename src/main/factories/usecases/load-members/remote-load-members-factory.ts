import { RemoteLoadMembers } from '../../../../data/usecases'
import { makeAuthorizeHttpClientDecorator } from '../../decorators'
import { makeApiUrl } from '../../http'

export const makeRemoteLoadMembers = (): RemoteLoadMembers => new RemoteLoadMembers(makeApiUrl('/group'), makeAuthorizeHttpClientDecorator())
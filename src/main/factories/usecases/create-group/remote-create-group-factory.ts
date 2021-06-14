import { RemoteCreateGroup } from '../../../../data/usecases'
import { makeAuthorizeHttpClientDecorator } from '../../decorators'
import { makeApiUrl } from '../../http'

export const makeRemoteCreateGroup = (): RemoteCreateGroup => new RemoteCreateGroup(makeApiUrl('/group'), makeAuthorizeHttpClientDecorator())
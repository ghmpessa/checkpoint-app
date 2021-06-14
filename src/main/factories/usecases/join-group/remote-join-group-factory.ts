import { RemoteJoinGroup } from '../../../../data/usecases'
import { makeAuthorizeHttpClientDecorator } from '../../decorators'
import { makeApiUrl } from '../../http'

export const makeRemoteJoinGroup = (): RemoteJoinGroup => new RemoteJoinGroup(makeApiUrl('/group'), makeAuthorizeHttpClientDecorator())
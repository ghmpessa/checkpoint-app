import { RemoteAddPost } from '../../../../data/usecases'
import { makeAuthorizeHttpClientDecorator } from '../../decorators'
import { makeApiUrl } from '../../http'

export const makeRemoteAddPost = (): RemoteAddPost => new RemoteAddPost(makeApiUrl('/post'), makeAuthorizeHttpClientDecorator())
import { RemoteLoadPosts } from '../../../../data/usecases'
import { makeAuthorizeHttpClientDecorator } from '../../decorators'
import { makeApiUrl } from '../../http'

export const makeRemoteLoadPosts = (): RemoteLoadPosts => new RemoteLoadPosts(makeApiUrl('/group'), makeAuthorizeHttpClientDecorator())
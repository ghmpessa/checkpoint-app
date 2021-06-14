import { HttpClient, HttpStatusCode } from '../../protocols'
import { ServerError, UnexpectedError } from '../../../domain/errors'
import { PostModel } from '../../../domain/models'
import { LoadPosts } from '../../../domain/usecases'

export class RemoteLoadPosts implements LoadPosts {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<PostModel[]>
  ) { }

  async load(groupId: string): Promise<PostModel[]> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${groupId}/posts`,
      method: 'get',
    })

    switch (httpResponse.status) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.serverError: throw new ServerError()
      default: throw new UnexpectedError()
    }
  }
}

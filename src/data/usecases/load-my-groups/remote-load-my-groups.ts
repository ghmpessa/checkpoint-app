import { HttpClient, HttpStatusCode } from '../../protocols'
import { ServerError, UnexpectedError } from '../../../domain/errors'
import { GroupModel } from '../../../domain/models'
import { LoadMyGroups } from '../../../domain/usecases'

export class RemoteLoadMyGroups implements LoadMyGroups {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<GroupModel[]>
  ) { }

  async load(): Promise<GroupModel[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })

    switch (httpResponse.status) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.serverError: throw new ServerError()
      default: throw new UnexpectedError()
    }
  }
}

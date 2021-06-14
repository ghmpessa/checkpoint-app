import { HttpClient, HttpStatusCode } from '../../protocols'
import { ServerError, UnexpectedError } from '../../../domain/errors'
import { GroupModel, ProfileModel } from '../../../domain/models'
import { LoadAccount, LoadGroups, LoadGroupsParams } from '../../../domain/usecases'

export class RemoteLoadGroups implements LoadGroups {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<GroupModel[]>
  ) { }

  async load(params: LoadGroupsParams): Promise<GroupModel[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
      params
    })

    switch (httpResponse.status) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.serverError: throw new ServerError()
      default: throw new UnexpectedError()
    }
  }
}

import { HttpClient, HttpStatusCode } from '../../protocols'
import { ServerError, UnexpectedError } from '../../../domain/errors'
import { GroupModel, ProfileShortModel } from '../../../domain/models'
import { LoadGroups, LoadGroupsParams, LoadMembers } from '../../../domain/usecases'

export class RemoteLoadMembers implements LoadMembers {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<ProfileShortModel[]>
  ) { }

  async load(groupId: string): Promise<ProfileShortModel[]> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${groupId}/accounts`,
      method: 'get'
    })

    switch (httpResponse.status) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.serverError: throw new ServerError()
      default: {
        console.log(httpResponse.body)
        throw new UnexpectedError()
      }
    }
  }
}

import { HttpClient, HttpStatusCode } from '../../protocols'
import { ServerError, UnexpectedError } from '../../../domain/errors'
import { ProfileModel } from '../../../domain/models'
import { LoadAccount } from '../../../domain/usecases'

export class RemoteLoadAccount implements LoadAccount {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<ProfileModel>
  ) { }

  async load(userId: string): Promise<ProfileModel> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${userId}`,
      method: 'get'
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.serverError: throw new ServerError()
      default: throw new UnexpectedError()
    }
  }
}

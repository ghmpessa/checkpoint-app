import { HttpClient, HttpStatusCode } from '../../protocols/'
import { InvalidCredentialsError, UnexpectedError } from '../../../domain/errors'
import { AuthenticationParams } from '../../../domain/usecases'

export class RemoteAuthentication {
  constructor(private readonly url: string, private readonly httpClient: HttpClient<any>) { }

  async auth(params: AuthenticationParams): Promise<any> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    })

    switch ((await httpResponse).statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}

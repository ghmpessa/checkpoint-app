import { HttpClient, HttpStatusCode } from '../../protocols/'
import { InvalidCredentialsError, UnexpectedError } from '../../../domain/errors'
import { AuthenticationParams } from '../../../domain/usecases'
import { AccountModel } from '@/domain/models'

export class RemoteAuthentication {
  constructor(private readonly url: string, private readonly httpClient: HttpClient<AccountModel>) { }

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    })

    switch ((await httpResponse).status) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.forbidden: throw new InvalidCredentialsError()

      default: throw new UnexpectedError()

    }
  }
}

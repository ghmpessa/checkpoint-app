import { AddAccount, AddAccountParams, EditAccount } from '../../../domain/usecases'
import { HttpClient, HttpStatusCode } from '../../protocols'
import { UnexpectedError, ServerError, InvalidParamError } from '../../../domain/errors'

export class RemoteEditAccount implements EditAccount {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<any>
  ) { }

  async edit(params: AddAccountParams): Promise<any> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      body: params,
      method: 'put'
    })

    switch ((await httpResponse).status) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.badRequest: throw new InvalidParamError()
      case HttpStatusCode.serverError: throw new ServerError()
      default: throw new UnexpectedError()
    }
  }
}

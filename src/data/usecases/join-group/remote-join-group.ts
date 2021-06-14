import { JoinGroup, JoinParams } from '../../../domain/usecases'
import { HttpClient, HttpStatusCode } from '../../protocols'
import { UnexpectedError, InvalidParamError, ServerError } from '../../../domain/errors'
import { GroupModel } from '../../../domain/models'

export class RemoteJoinGroup implements JoinGroup {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<void>
  ) { }

  async join(params: JoinParams): Promise<void> {
    const bind = {
      bind: params.bind
    }
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${params.groupId}/bind`,
      body: bind,
      method: 'post'
    })

    switch ((await httpResponse).status) {
      case HttpStatusCode.noContent: return
      case HttpStatusCode.badRequest: throw new InvalidParamError()
      case HttpStatusCode.serverError: throw new ServerError()
      default: {
        console.log(httpResponse.body)
        console.log(`${this.url}/${params.groupId}/bind`)
        throw new UnexpectedError()
      }
    }
  }
}

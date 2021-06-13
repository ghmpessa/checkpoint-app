import { GetStorage } from '../../../data/protocols'
import { HttpClient, HttpRequest, HttpResponse } from '../../../data/protocols/http'

export class AuthorizeHttpClientDecorator implements HttpClient {
  constructor(
    private readonly getStorage: GetStorage,
    private readonly httpClient: HttpClient
  ) { }

  async request(data: HttpRequest): Promise<HttpResponse> {
    const account = await this.getStorage.get('@checkpoint:account')
    if (account?.accessToken) {
      Object.assign(data, {
        headers: Object.assign(data.headers || {}, {
          'x-access-token': account.accessToken
        })
      })
    }
    const httpResponse = await this.httpClient.request(data)
    return httpResponse
  }
}

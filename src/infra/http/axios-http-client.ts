import { HttpClient, HttpRequest, HttpResponse } from '../../data/protocols'
import axios, { AxiosResponse } from 'axios'

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
        params: data.params
      }
      )
      console.log(axiosResponse)
    } catch (error) {
      axiosResponse = error.response
      console.log(axiosResponse)
    }

    return {
      statusCode: axiosResponse.statusCode,
      body: axiosResponse.data
    }
  }
}

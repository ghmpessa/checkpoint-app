import { AuthorizeHttpClientDecorator } from '../../decorators'
import { makeAsyncStorageAdapter } from '../cache'
import { makeAxiosHttpClient } from '../http'
import { HttpClient } from '../../../data/protocols'

export const makeAuthorizeHttpClientDecorator = (): HttpClient => new AuthorizeHttpClientDecorator(makeAsyncStorageAdapter(), makeAxiosHttpClient())

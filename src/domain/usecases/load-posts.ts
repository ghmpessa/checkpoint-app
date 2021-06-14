import { PostModel } from '../models'

export interface LoadPosts {
  load: () => Promise<PostModel>
}
import { PostModel } from '../models'

export interface LoadPosts {
  load: (groupId: string) => Promise<PostModel[]>
}
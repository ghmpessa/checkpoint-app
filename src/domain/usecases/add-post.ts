import { PostModel } from '../models'

export type PostParams = {
  text: string,
  groupId: string
}

export interface AddPost {
  post: (params: PostParams) => Promise<PostModel>
}
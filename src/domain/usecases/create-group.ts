import { GroupModel } from '../models'

export type Group = {
  name: string
}

export interface CreateGroup {
  create: (params: Group) => Promise<GroupModel>
}

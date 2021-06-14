import { GroupModel } from '../models'

export type JoinParams = {
  groupId: string
  bind: boolean
}

export interface JoinGroup {
  join: (params: JoinParams) => Promise<void>
}
import { GroupModel } from '../models'

export interface LoadGroup {
  load: (groupId: string) => Promise<GroupModel>
}
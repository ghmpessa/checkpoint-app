import { GroupModel } from '../models'

export interface LoadMyGroups {
  load: () => Promise<GroupModel[]>
}
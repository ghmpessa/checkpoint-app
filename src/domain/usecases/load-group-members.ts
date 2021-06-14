import { ProfileShortModel } from '../models'

export interface LoadMembers {
  load: (groupId: string) => Promise<ProfileShortModel[]>
}
import { ProfileShortModel } from '../models'

export interface LoadMember {
  load: (groupId: string) => Promise<ProfileShortModel[]>
}
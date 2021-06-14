import { ProfileModel } from '../models'

export interface LoadGroup {
  load: (groupId: string) => Promise<ProfileModel[]>
}
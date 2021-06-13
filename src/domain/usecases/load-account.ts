import { ProfileModel } from "../models";

export interface LoadAccount {
  load: (userId: string) => Promise<ProfileModel>
}

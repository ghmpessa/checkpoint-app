import { ProfileModel } from "../models";

export interface LoadAccount {
  auth: (userId: string) => Promise<ProfileModel>
}

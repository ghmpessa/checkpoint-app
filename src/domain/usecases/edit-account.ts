import { ProfileModel } from "../models";

export type EditProfileParams = {
  username?: string
  name?: string
  email?: string
  password?: string
}

export interface EditAccount {
  edit: (params: EditProfileParams) => Promise<ProfileModel>
}

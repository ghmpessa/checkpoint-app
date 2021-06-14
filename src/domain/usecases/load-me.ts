import { ProfileModel } from "../models";

export interface LoadMe {
  load: () => Promise<ProfileModel>
}

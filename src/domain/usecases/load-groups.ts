import { GroupModel } from "../models";

export type LoadGroupsParams = {
  search: string
}

export interface LoadGroups {
  load: (params: LoadGroupsParams) => Promise<GroupModel[]>
}
import { IUser } from "./User";

export interface IContext {
  data: IContextData;
  setData: (key: keyof IContextData, value: any) => void;
}

export interface IContextData {
  users?: IUser[];
}

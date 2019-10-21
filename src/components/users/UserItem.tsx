import * as React from "react";
import { IUser } from "../../types/User";

interface IUserItemProps {
  user: IUser;
}

export const UserItem: React.FC<IUserItemProps> = props => {
  const { user } = props;
  return <li key={user.name}>{user.name}</li>;
};

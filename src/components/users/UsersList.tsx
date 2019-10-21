import * as React from "react";
import { IUser } from "../../types/User";
import { UserItem } from "./UserItem";

interface IUserListProps {
  users: IUser[];
}

export const UserList: React.FC<IUserListProps> = props => {
  const { users } = props;
  return (
    <ul className="user-container">
      {users &&
        users.map((user: IUser) => {
          return <UserItem key={user.id} user={user} />;
        })}
    </ul>
  );
};

import * as React from "react";
import { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import { UserList } from "../components/users/UsersList";
import { IContext } from "../types/Context";
import { AxiosResponse } from "axios";
import { getAllUsers } from "../actions/User";

const UsersListContainer: React.FC = (): JSX.Element => {
  const { data, setData } = useContext<IContext>(AppContext);

  useEffect(() => {
    getAllUsers().then((res: AxiosResponse) => {
      setData("users", res.data);
    });
  }, []);

  return <>{data.users && <UserList users={data.users} />}</>;
};

export default UsersListContainer;

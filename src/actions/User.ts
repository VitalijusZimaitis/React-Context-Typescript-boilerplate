import { Request } from "../generic/Request";
import { AxiosPromise } from "axios";

export const getAllUsers = (): AxiosPromise => {
  return new Request(`/users`).get();
};

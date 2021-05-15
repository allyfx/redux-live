import { ActionTypes, IUser } from "./types";

export function addUserCredentials(user: IUser) {
  return {
    type: ActionTypes.addUserCredentials,
    payload: {
      user,
    }
  }
}

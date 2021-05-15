import { Reducer } from "redux";
import producer from "immer";

import { ActionTypes, IUser } from "./types";

const INITIAL_STATE: IUser = {
  name: '',
  email: '',
}

const user: Reducer<IUser> = (state = INITIAL_STATE, action) => {
  return producer(state, draft => {
    switch (action.type) {
      case ActionTypes.addUserCredentials: {
        const { user } = action.payload;

        draft.email = user.email;
        draft.name = user.name;

        break;
      }
      default: {
        return draft;
      }
    }
  })
};

export default user;

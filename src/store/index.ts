import { createStore } from "redux";

import { IUser } from "./modules/user/types";

import rootReducer from "./modules/rootReducer";

export interface IStore {
  user: IUser
}

const store = createStore(rootReducer);

export default store;

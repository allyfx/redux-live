import { useSelector } from "react-redux";

import { IStore } from "../store";
import { IUser } from "../store/modules/user/types";

export function UserProfile() {
  const { name, email } = useSelector<IStore, IUser>(state => state.user);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>Nome: {name}</label>
      <label>Email: {email}</label>
    </div>
  )
}
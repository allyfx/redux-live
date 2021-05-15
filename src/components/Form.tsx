import { useState } from "react";
import { useDispatch } from "react-redux";

import { addUserCredentials } from "../store/modules/user/action";
import { IUser } from "../store/modules/user/types";

const INITIAL_USER = {
  name: '',
  email: '',
}

export function Form() {
  const dispatch = useDispatch();
  const [user, setUser] = useState<IUser>(INITIAL_USER);

  function handleSubmit() {
    dispatch(addUserCredentials(user));
    setUser(INITIAL_USER);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Digite seu nome"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        value={user.name}
      />
      <input
        type="text"
        placeholder="Digite seu email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        value={user.email}
      />

      <button onClick={handleSubmit}>Salvar</button>
    </div>
  )
}
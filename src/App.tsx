import { Provider } from "react-redux";

import { Form } from "./components/Form";
import { UserProfile } from "./components/UserProfile";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Form />
      <UserProfile />
    </Provider>
  );
}

export default App;

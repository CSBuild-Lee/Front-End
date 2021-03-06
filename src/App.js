import React from "react";
import { Route } from "react-router-dom";
import Global from "./styles/global";

import Main from './views/Main';
import Login from './views/Login';
import Signup from './views/Signup';
import Welcome from './views/Welcome';
import Instructions from './views/Instructions';

function App() {
  return (
    <div>
      <Global />
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/instructions" component={Instructions} />
    </div>
  );
}

export default App;

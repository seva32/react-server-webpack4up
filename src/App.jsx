import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home } from "./domain/Home";
import { Posts } from "./domain/Posts";
import NotFound from "./domain/NotFound/NotFound";
// eslint-disable-next-line max-len
import RedirectWithStatus from "./components/RedirectWithStatus/RedirectWithStatus";
import { LoginFormUI } from "./domain/SigninPage";
import { SignupFormUI } from "./domain/SignupPage";
import Signout from "./domain/Signout/Signout";

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={LoginFormUI} />
      <Route exact path="/signup" component={SignupFormUI} />
      <Route exact path="/signout" component={Signout} />
      <Route exact path="/posts" component={Posts} />
      <RedirectWithStatus status={301} from="/home" to="/" />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default App;

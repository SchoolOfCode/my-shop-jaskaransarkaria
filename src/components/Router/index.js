import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import StoreSelector from "../StoreSelector";
import App from "../App";
import Coventry from "./Coventry";
import Birmingham from "./Birmingham";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={StoreSelector} />
          <Route exact path="/Coventry" component={Coventry} />
          <Route exact path="/Birmingham" component={Birmingham} />
          <Route path="/:store" component={App} />
          {/* <Route path="/:store/burger" component={App} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;

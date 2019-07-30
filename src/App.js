import React from "react";

import Homepage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import "./App.css";
let Hats = () => {
  return <div className="homepage">Hats</div>;
};
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Registrasi from './Petugas/Pages/Registrasi'
import MainPosko from "./Posko/Page/MainPosko";
import BantuanMasukPosko from "./Posko/Page/BantuanMasukPosko";
import PoskoBencana from "./Posko/Page/PoskoBencana";
import Login from "./Posko/Page/Login";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={MainPosko} />
          <Route path="/posko" exact component={MainPosko} />
          <Route
            path="/posko/bantuan-masuk"
            exact
            component={BantuanMasukPosko}
          />
          <Route path="/posko/posko-bencana" exact component={PoskoBencana} />
          <Route path="/posko-login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

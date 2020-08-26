import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Registrasi from './Petugas/Pages/Registrasi'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainPosko from "./Posko/Page/MainPosko";
import BantuanMasukPosko from "./Posko/Page/BantuanMasukPosko/BantuanMasukPosko";
import PoskoBencana from "./Posko/Page/PoskoBencana/PoskoBencana";
import DataPengungsi from "./Posko/Page/DataPengungsi/DataPengungsi";
import FasilitasPosko from "./Posko/Page/FasilitasPosko/FasilitasPosko";
import Login from "./Posko/Page/Login";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={MainPosko} />
          <Route path="/posko" exact component={MainPosko} />
          <Route
            path="/posko/bantuan-masuk"
            exact
            component={BantuanMasukPosko}
          />
          <Route path="/posko/data-posko" exact component={PoskoBencana} />
          <Route
            path="/posko/fasilitas-posko"
            exact
            component={FasilitasPosko}
          />
          <Route path="/posko/data-pengungsi" exact component={DataPengungsi} />
          <Route path="/posko-login" exact component={Login} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

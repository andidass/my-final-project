import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import store from "./store";

//route
import PrivateRoute from "./routing/PrivateRoute";

// main component
import Error from "./Error";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MenuBar from "./Components/MenuBar";

// component page
import MainPosko from "./Posko/Page/MainPosko";
import BantuanMasukPosko from "./Posko/Page/BantuanMasukPosko/BantuanMasukPosko";
import PoskoBencana from "./Posko/Page/PoskoBencana/PoskoBencana";
import DataPengungsi from "./Posko/Page/DataPengungsi/DataPengungsi";
import FasilitasPosko from "./Posko/Page/FasilitasPosko/FasilitasPosko";
// import Login from "./Posko/Page/Login";

import RegistrasiPetugas from "./Petugas/Pages/Registrasi";
import LoginPosko from "./Petugas/Pages/Login";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setTokenAuth";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <MenuBar />
        <Switch>
          <Route path="/error" exact component={Error} />
          <Route path="/" exact component={LoginPosko} />
          <Route path="/posko/login" exact component={LoginPosko} />
          <Route path="/posko/registrasi" exact component={RegistrasiPetugas} />
          <PrivateRoute path="/posko/dashboard" exact component={MainPosko} />
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
          {/* <Route path="/posko-login" exact component={Login} /> */}
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;

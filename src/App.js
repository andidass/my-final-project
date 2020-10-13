import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import store from "./store";

//route
import PrivateRoute from "./routing/PrivateRoute";

// main component
import Error from "./Error";
// import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MenuBars from "./Components/MenuBars";
// import MenuBar from "./Components/MenuBar";
import Spinner from "./Components/Spinner";

// component page
import MainPosko from "./Posko/Page/MainPosko";
// import Profile from "./Posko/Page/Profile/Profile";
import BantuanMasukPosko from "./Posko/Page/BantuanMasukPosko/BantuanMasukPosko";
import BantuanKeluarPosko from "./Posko/Page/BantuanKeluarPosko/BantuanKeluarPosko";
import PermintaanBantuan from "./Posko/Page/PermintaanBantuan/PermintaanBantuan";
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
        {/* <Header /> */}
        {/* <MenuBar /> */}
        <div className="asd">
          <MenuBars />
          <Switch>
            <Route path="/menu-posko" exact component={MainPosko} />
            <Route path="/error" exact component={Error} />
            <Route path="/spinner" exact component={Spinner} />
            <Route path="/" exact component={LoginPosko} />

            {/* POSKO */}
            <Route path="/posko/login" exact component={LoginPosko} />
            <Route
              path="/posko/registrasi"
              exact
              component={RegistrasiPetugas}
            />
            <PrivateRoute path="/posko/dashboard" exact component={MainPosko} />
            {/* ubah menjadi privateroute kalo udah fix */}
            {/* <Route path="/posko/profile" exact component={Profile} /> */}
            <PrivateRoute
              path="/posko/bantuan-masuk"
              exact
              component={BantuanMasukPosko}
            />
            <PrivateRoute
              path="/posko/bantuan-keluar"
              exact
              component={BantuanKeluarPosko}
            />
            <PrivateRoute
              path="/posko/data-posko"
              exact
              component={PoskoBencana}
            />
            <PrivateRoute
              path="/posko/fasilitas-posko"
              exact
              component={FasilitasPosko}
            />
            <PrivateRoute
              path="/posko/data-pengungsi"
              exact
              component={DataPengungsi}
            />
            <PrivateRoute
              path="/posko/permintaan-bantuan"
              exact
              component={PermintaanBantuan}
            />
            {/* <Route path="/posko-login" exact component={Login} /> */}
          </Switch>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;

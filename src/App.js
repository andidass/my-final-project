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

// import Profile from "./Posko/Page/Profile/Profile";
import MainPosko from "./Posko/Page/MainPosko";
import BantuanMasukPosko from "./Posko/Page/BantuanMasukPosko/BantuanMasukPosko";
import BantuanKeluarPosko from "./Posko/Page/BantuanKeluarPosko/BantuanKeluarPosko";
import PermintaanBantuan from "./Posko/Page/PermintaanBantuan/PermintaanBantuan";
import PoskoBencana from "./Posko/Page/PoskoBencana/PoskoBencana";
import FormProfile from "./Posko/Page/PoskoBencana/FormPorfile";
import DataPengungsi from "./Posko/Page/DataPengungsi/DataPengungsi";
import FasilitasPosko from "./Posko/Page/FasilitasPosko/FasilitasPosko";

import SignIn from "./Posko/Page/Login";
import RegistrasiPetugas from "./Posko/Page/Registrasi";
// import SignIn from "./Petugas/Pages/Login";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setTokenAuth";

// test component
import DataPosko from "./Posko/Page/PoskoBencana/DataPosko";
import CustomizedSnackbars from "./Posko/CustomizedSnackbars";
// import Map from "./Posko/Page/Map";

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
            <Route path="/data-posko" exact component={DataPosko} />
            {/* <Route path="/map" exact component={Map} /> */}
            <Route path="/menu-posko" exact component={MainPosko} />
            <Route path="/error" exact component={Error} />
            <Route path="/spinner" exact component={Spinner} />
            <Route path="/" exact component={SignIn} />

            {/* POSKO */}
            <Route path="/posko/login" exact component={SignIn} />
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
              path="/posko/data-posko/form-profile"
              exact
              component={FormProfile}
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
            <PrivateRoute
              path="/snackbars"
              exact
              component={CustomizedSnackbars}
            />
          </Switch>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;

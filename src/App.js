import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import store from "./store";

//route
import PrivateRoute from "./routing/PrivateRoute";

// main component
import Error from "./Error";
import Footer from "./Components/Footer";
import MenuBars from "./Components/MenuBars";
import Spinner from "./Components/Spinner";
import SignInPosko from "./Posko/Page/Login";
import RegistrasiPosko from "./Posko/Page/Registrasi";
import MainPosko from "./Posko/Page/MainPosko";
//profile posko
import PoskoBencana from "./Posko/Page/PoskoBencana/PoskoBencana";
import FormProfile from "./Posko/Page/PoskoBencana/FormPorfile";
import EditProfile from "./Posko/Page/PoskoBencana/EditProfile";
import ProfilePosko from "./Posko/Page/PoskoBencana/ProfilePosko";
import DataPetugas from "./Posko/Page/PoskoBencana/DataPetugas";
// pengungsi
import DataPengungsi from "./Posko/Page/DataPengungsi/DataPengungsi";
import NoPengungsi from "./Posko/Page/DataPengungsi/NoPengungsi";
import FasilitasPosko from "./Posko/Page/FasilitasPosko/FasilitasPosko";
// bantuan masuk
import BantuanMasukPosko from "./Posko/Page/BantuanMasukPosko/BantuanMasukPosko";
import DataBantuanMasuk from "./Posko/Page/BantuanMasukPosko/DataBantuanMasuk";
import BantuanKeluarPosko from "./Posko/Page/BantuanKeluarPosko/BantuanKeluarPosko";
import PermintaanBantuan from "./Posko/Page/PermintaanBantuan/PermintaanBantuan";

// import SignInPetugas from "./Petugas/Pages/Login";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setTokenAuth";

// test component
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
        <MenuBars />
        <Switch>
          {/* POSKO */}
          <Route path="/" exact component={SignInPosko} />
          <Route path="/posko/login" exact component={SignInPosko} />
          <Route path="/posko/registrasi" exact component={RegistrasiPosko} />
          <Route path="/posko/dashboard" exact component={MainPosko} />
          {/* --------- PROFILE POSKO --------- */}
          <Route path="/posko/data-posko" exact component={PoskoBencana} />
          <Route
            path="/posko/data-posko/form-profile"
            exact
            component={FormProfile}
          />
          <Route
            path="/posko/data-posko/edit-profile"
            exact
            component={EditProfile}
          />
          <Route
            path="/posko/data-posko/profile"
            exact
            component={ProfilePosko}
          />
          <Route
            path="/posko/data-posko/data-petugas"
            exact
            component={DataPetugas}
          />
          {/* ---------------------------------- */}
          {/* --------- PENGUNGSI POSKO --------- */}
          <Route path="/posko/data-pengungsi" exact component={DataPengungsi} />
          <Route path="/posko/create-pengungsi" exact component={NoPengungsi} />
          {/* ----------------------------------- */}

          {/* ----------------------------------- */}
          {/* --------- BANTUAN MASUK POSKO --------- */}
          <Route
            path="/posko/bantuan-masuk"
            exact
            component={BantuanMasukPosko}
          />
          <Route
            path="/posko/bantuan-masuk/data"
            exact
            component={DataBantuanMasuk}
          />
          {/* ----------------------------------- */}
          <Route
            path="/posko/bantuan-keluar"
            exact
            component={BantuanKeluarPosko}
          />

          <Route
            path="/posko/fasilitas-posko"
            exact
            component={FasilitasPosko}
          />
          <Route
            path="/posko/permintaan-bantuan"
            exact
            component={PermintaanBantuan}
          />
          {/* COMPONEN COBA-COBA */}
          {/* <Route path="/map" exact component={Map} /> */}
          <Route path="/error" exact component={Error} />
          <Route path="/spinner" exact component={Spinner} />
          <Route path="/snackbars" exact component={CustomizedSnackbars} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;

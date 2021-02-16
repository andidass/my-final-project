import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import MainPage from "./MainPage/MainPage";
//route
// import PrivateRoute from "./routing/PrivateRoute";

// main component
import Error from "./Components/404";
import Coba from "./Coba";
// import Footer from "./Components/Footer";
import Warning from "./Components/401";
import MenuBars from "./Components/MenuBars";
import Spinner from "./Components/Spinner";
import SignInPosko from "./Posko/Page/Login";
import RegistrasiPosko from "./Posko/Page/Registrasi";
import MainPosko from "./Posko/Page/MainPosko";
import InfoDonasi from "./MainPage/InfoDonasi";
//profile posko
import PoskoBencana from "./Posko/Page/PoskoBencana/PoskoBencana";
import FormProfile from "./Posko/Page/PoskoBencana/FormPorfile";
import EditProfile from "./Posko/Page/PoskoBencana/EditProfile";
import ProfilePosko from "./Posko/Page/PoskoBencana/ProfilePosko";
import DataPetugas from "./Posko/Page/PoskoBencana/DataPetugas";
// pengungsi
import DataPengungsi from "./Posko/Page/DataPengungsi/DataPengungsi";
// Fasilitas Posko
import FasilitasPosko from "./Posko/Page/FasilitasPosko/FasilitasPosko";
// permintaan bantuan posko
import PermintaanBantuan from "./Posko/Page/PermintaanBantuan/PermintaanBantuan";
// bantuan masuk
import BantuanMasukPos from "./Posko/Page/BantuanMasukPosko";
import FormBantuanMasukPos from "./Posko/Page/BantuanMasukPosko/FormBantuanMasuk";
import BantuanKeluarPosko from "./Posko/Page/BantuanKeluarPosko";
import FormBantuanKeluarPosko from "./Posko/Page/BantuanKeluarPosko/FormBantuanKeluar";

// PETUGAS LAPANGAN
import LoginPetugas from "./Petugas/Pages/LoginPetugas";
import RegistrasiPetugas from "./Petugas/Pages/RegistrasiPetugas";
import MainPetugas from "./Petugas/Pages/MainPetugas";
import ProfilePetugas from "./Petugas/Pages/ProfilePetugas";
import LaporanBencana from "./Petugas/Pages/LaporanBencana/";
import KejadianBencana from "./Petugas/Pages/LaporanBencana/KejadianBencana";
import KorbanJiwa from "./Petugas/Pages/LaporanBencana/KorbanJiwa";
import LaporanKerusakan from "./Petugas/Pages/LaporanBencana/LaporanKerusakan";
import FasumPenanganan from "./Petugas/Pages/LaporanBencana/FasumPenanganan";

// ADMIN
import LoginAdmin from "./Admin/Pages/LoginAdmin";
import MainAdmin from "./Admin/Pages/MainAdmin";
import BantuanUtama from "./Admin/Pages/BantuanUtama";
import AdminPermintaanBantuan from "./Admin/Pages/PermintaanBantuan";
import DataPosko from "./Admin/Pages/DataPosko";
import DataPoskoById from "./Admin/Pages/DataPosko/DataPoskoById";
import DataBencanaById from "./Admin/Pages/DataBencana/DataBencanaById";
import AllDataBencana from "./Admin/Pages/DataBencana";
import AllDataPengungsi from "./Admin/Pages/DataPengungsi";
import PermintaanBantuanById from "./Admin/Pages/PermintaanBantuan/PermintaanBantuanById";
import BantuanMasuk from "./Admin/Pages/BantuanMasuk";
import BantuanKeluar from "./Admin/Pages/BantuanKeluar";
import FormBantuanMasuk from "./Admin/Pages/BantuanMasuk/FormBantuanMasuk";
import FormBantuanKeluar from "./Admin/Pages/BantuanKeluar/FormBantuanKeluar";
import DataBantuanPos from "./Admin/Pages/DataBantuanPos";
import DataBantuanPosko from "./Admin/Pages/DataBantuanPosko";
import DataBantuanPosById from "./Admin/Pages/DataBantuanPos/DataBantuanPosById";

import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setTokenAuth";

// test component
import Confirmation from "./Admin/Pages/BantuanMasuk/Confirmation";
import CustomizedSnackbars from "./Posko/CustomizedSnackbars";
import MapPosko from "./Admin/Pages/MapPosko";

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
          <Route path="/" exact component={MainPage} />
          <Route path="/main-page" exact component={MainPage} />
          <Route path="/data-pos" exact component={DataPosko} />
          <Route path="/info-dan-donasi" exact component={InfoDonasi} />
          <Route path="/data-pos/:id" exact component={DataPoskoById} />
          <Route path="/data-bantuan-pos" exact component={DataBantuanPos} />
          <Route
            path="/data-bantuan-pos/posko"
            exact
            component={DataBantuanPosko}
          />
          <Route
            path="/data-bantuan-pos/:id"
            exact
            component={DataBantuanPosById}
          />
          <Route
            path="/permintaan-bantuan"
            exact
            component={AdminPermintaanBantuan}
          />
          <Route
            path="/permintaan-bantuan/:id"
            exact
            component={PermintaanBantuanById}
          />
          <Route
            path="/data-laporan-bencana"
            exact
            component={AllDataBencana}
          />
          <Route
            path="/data-laporan-bencana/:id"
            exact
            component={DataBencanaById}
          />
          <Route path="/data-bantuan" exact component={DataBantuanPos} />
          <Route
            path="/data-bantuan/:id"
            exact
            component={DataBantuanPosById}
          />
          <Route path="/data-pengungsi" exact component={AllDataPengungsi} />
          {/* <Route path="/" exact component={MainPosko} />
          <Route path="/" exact component={MainPetugas} /> */}
          {/* --------- POS --------- */}
          {/* <Route path="/" exact component={SignInPosko} /> */}
          <Route path="/pos" exact component={MainPosko} />
          <Route path="/pos/login" exact component={SignInPosko} />
          <Route path="/pos/registrasi" exact component={RegistrasiPosko} />
          <Route path="/pos/dashboard" exact component={MainPosko} />
          {/* --------- PROFILE POSKO --------- */}
          <Route path="/pos/data-pos" exact component={PoskoBencana} />
          <Route
            path="/pos/data-pos/form-profile" //create profile
            exact
            component={FormProfile}
          />
          <Route
            path="/pos/data-pos/edit-profile" //edit profile
            exact
            component={EditProfile}
          />
          <Route
            path="/pos/data-pos/profile" /// show data profile
            exact
            component={ProfilePosko}
          />
          <Route
            path="/pos/data-pos/data-petugas" // add data petugas
            exact
            component={DataPetugas}
          />
          {/* --------- FASILITAS POSKO --------- */}
          <Route path="/pos/fasilitas-pos" exact component={FasilitasPosko} />
          {/* --------- PERMINTAAN BANTUAN POSKO --------- */}
          <Route
            path="/pos/permintaan-bantuan"
            exact
            component={PermintaanBantuan}
          />
          {/* --------- PENGUNGSI POSKO --------- */}
          <Route path="/pos/data-pengungsi" exact component={DataPengungsi} />
          {/* --------- BANTUAN MASUK POSKO --------- */}
          <Route path="/pos/bantuan-masuk" exact component={BantuanMasukPos} />
          <Route
            path="/pos/bantuan-masuk/input"
            exact
            component={FormBantuanMasukPos}
          />
          <Route
            path="/pos/bantuan-keluar"
            exact
            component={BantuanKeluarPosko}
          />
          <Route
            path="/pos/bantuan-keluar/input"
            exact
            component={FormBantuanKeluarPosko}
          />
          {/* ---------------- PETUGAS ------------------- */}
          <Route path="/petugas/login" exact component={LoginPetugas} />
          <Route
            path="/petugas/registrasi"
            exact
            component={RegistrasiPetugas}
          />
          <Route path="/petugas" exact component={MainPetugas} />
          <Route path="/petugas/dashboard" exact component={MainPetugas} />
          <Route path="/petugas/profile" exact component={ProfilePetugas} />
          <Route
            path="/petugas/data-bencana"
            exact
            component={LaporanBencana}
          />
          <Route
            path="/petugas/data-bencana/kejadian-bencana"
            exact
            component={KejadianBencana}
          />
          <Route
            path="/petugas/data-bencana/korban-jiwa"
            exact
            component={KorbanJiwa}
          />
          <Route
            path="/petugas/data-bencana/kerusakan"
            exact
            component={LaporanKerusakan}
          />
          <Route
            path="/petugas/data-bencana/fasum-penanganan"
            exact
            component={FasumPenanganan}
          />

          {/* ---------------- ADMIN ------------------- */}
          {/* <Route path="/" exact component={LoginAdmin} /> */}
          <Route path="/admin" exact component={MainAdmin} />
          <Route path="/admin/login" exact component={LoginAdmin} />
          <Route path="/admin/dashboard" exact component={MainAdmin} />
          <Route path="/admin/bantuan-utama" exact component={BantuanUtama} />
          <Route path="/admin/data-pos" exact component={DataPosko} />
          <Route path="/admin/data-pos/:id" exact component={DataPoskoById} />
          <Route path="/admin/map" exact component={MapPosko} />
          <Route path="/admin/bantuan-masuk" exact component={BantuanMasuk} />
          <Route path="/admin/bantuan-keluar" exact component={BantuanKeluar} />
          <Route
            path="/admin/data-bantuan-pos"
            exact
            component={DataBantuanPos}
          />
          <Route
            path="/admin/data-bantuan-pos/:id"
            exact
            component={DataBantuanPosById}
          />
          <Route
            path="/admin/bantuan-keluar/input"
            exact
            component={FormBantuanKeluar}
          />
          <Route
            path="/admin/bantuan-masuk/input"
            exact
            component={FormBantuanMasuk}
          />
          <Route
            path="/admin/permintaan-bantuan"
            exact
            component={AdminPermintaanBantuan}
          />
          <Route
            path="/admin/permintaan-bantuan/:id"
            exact
            component={PermintaanBantuanById}
          />
          <Route path="/admin/data-bencana" exact component={AllDataBencana} />
          <Route
            path="/admin/data-bencana/:id"
            exact
            component={DataBencanaById}
          />

          <Route
            path="/admin/data-pengungsi"
            exact
            component={AllDataPengungsi}
          />
          {/* COMPONEN COBA-COBA */}
          {/* <Route path="/map" exact component={Map} /> */}

          <Route path="/coba" exact component={Coba} />
          <Route path="/not-authorized" exact component={Warning} />
          <Route path="/error" exact component={Error} />
          <Route path="/spinner" exact component={Spinner} />
          <Route path="/snackbars" exact component={CustomizedSnackbars} />
          <Route path="/confirmation" exact component={Confirmation} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </Provider>
  );
};

export default App;

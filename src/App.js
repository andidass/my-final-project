import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import store from "./store";

//route
// import PrivateRoute from "./routing/PrivateRoute";

// main component
import Error from "./Error";
import Coba from "./Coba";
// import Footer from "./Components/Footer";
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
// Fasilitas Posko
import FasilitasPosko from "./Posko/Page/FasilitasPosko/FasilitasPosko";
// permintaan bantuan posko
import PermintaanBantuan from "./Posko/Page/PermintaanBantuan/PermintaanBantuan";
// bantuan masuk
// import BantuanMasuk from "./Posko/Page/BantuanMasukPosko";
// import DataBantuanMasuk from "./Posko/Page/BantuanMasukPosko/DataBantuanMasuk";
import BantuanKeluarPosko from "./Posko/Page/BantuanKeluarPosko/BantuanKeluarPosko";

// PETUGAS LAPANGAN
import LoginPetugas from "./Petugas/Pages/LoginPetugas";
import RegistrasiPetugas from "./Petugas/Pages/RegistrasiPetugas";
import MainPetugas from "./Petugas/Pages/MainPetugas";
import ProfilePetugas from "./Petugas/Pages/ProfilePetugas";
import MenuLaporanBencana from "./Petugas/Pages/LaporanBencana/MenuLaporanBencana";
import KejadianBencana from "./Petugas/Pages/LaporanBencana/KejadianBencana";
import KorbanJiwa from "./Petugas/Pages/LaporanBencana/KorbanJiwa";
import LaporanKerusakan from "./Petugas/Pages/LaporanBencana/LaporanKerusakan";
import FasumPenanganan from "./Petugas/Pages/LaporanBencana/FasumPenanganan";
// import LaporanBencana from "./Petugas/Pages/LaporanBencana";
import LaporanHarian from "./Petugas/Pages/LaporanHarian";

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

// import { loadUser } from "./actions/auth";
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
  // useEffect(() => {
  //   store.dispatch(loadUser());
  // }, []);
  return (
    <Provider store={store}>
      <Router>
        <MenuBars />
        <Switch>
          {/* --------- POSKO --------- */}
          {/* <Route path="/" exact component={SignInPosko} /> */}
          <Route path="/posko/login" exact component={SignInPosko} />
          <Route path="/posko/registrasi" exact component={RegistrasiPosko} />
          <Route path="/posko/dashboard" exact component={MainPosko} />
          {/* --------- PROFILE POSKO --------- */}
          <Route path="/posko/data-posko" exact component={PoskoBencana} />
          <Route
            path="/posko/data-posko/form-profile" //create profile
            exact
            component={FormProfile}
          />
          <Route
            path="/posko/data-posko/edit-profile" //edit profile
            exact
            component={EditProfile}
          />
          <Route
            path="/posko/data-posko/profile" /// show data profile
            exact
            component={ProfilePosko}
          />
          <Route
            path="/posko/data-posko/data-petugas" // add data petugas
            exact
            component={DataPetugas}
          />
          {/* --------- FASILITAS POSKO --------- */}
          <Route
            path="/posko/fasilitas-posko"
            exact
            component={FasilitasPosko}
          />
          {/* --------- PERMINTAAN BANTUAN POSKO --------- */}
          <Route
            path="/posko/permintaan-bantuan"
            exact
            component={PermintaanBantuan}
          />
          {/* --------- PENGUNGSI POSKO --------- */}
          <Route path="/posko/data-pengungsi" exact component={DataPengungsi} />
          {/* --------- BANTUAN MASUK POSKO --------- */}
          {/* <Route path="/posko/bantuan-masuk" exact component={BantuanMasuk} />
          <Route
            path="/posko/bantuan-masuk/data"
            exact
            component={DataBantuanMasuk}
          /> */}
          <Route
            path="/posko/bantuan-keluar"
            exact
            component={BantuanKeluarPosko}
          />
          {/* ---------------- PETUGAS ------------------- */}
          <Route path="/petugas/login" exact component={LoginPetugas} />
          <Route
            path="/petugas/registrasi"
            exact
            component={RegistrasiPetugas}
          />
          <Route path="/petugas/dashboard" exact component={MainPetugas} />
          <Route path="/petugas/profile" exact component={ProfilePetugas} />
          <Route
            path="/petugas/laporan-harian"
            exact
            component={LaporanHarian}
          />
          <Route
            path="/petugas/data-bencana"
            exact
            component={MenuLaporanBencana}
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
          <Route path="/" exact component={LoginAdmin} />
          <Route path="/admin/login" exact component={LoginAdmin} />
          <Route path="/admin/dashboard" exact component={MainAdmin} />
          <Route path="/admin/bantuan-utama" exact component={BantuanUtama} />
          <Route path="/admin/data-posko" exact component={DataPosko} />
          <Route path="/admin/data-posko/:id" exact component={DataPoskoById} />
          <Route path="/admin/map" exact component={MapPosko} />
          <Route path="/admin/data-bencana" exact component={AllDataBencana} />
          <Route path="/admin/bantuan-masuk" exact component={BantuanMasuk} />
          <Route path="/admin/bantuan-keluar" exact component={BantuanKeluar} />
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
            path="/admin/permintaan-bantuan/:id"
            exact
            component={PermintaanBantuanById}
          />
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
          <Route
            path="/admin/permintaan-bantuan"
            exact
            component={AdminPermintaanBantuan}
          />
          {/* COMPONEN COBA-COBA */}
          {/* <Route path="/map" exact component={Map} /> */}

          <Route path="/coba" exact component={Coba} />
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

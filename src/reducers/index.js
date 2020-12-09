import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import pengungsi from "./pengungsi";
import bantuanMasuk from "./bantuanMasuk";
import fasilitasPosko from "./fasilitasPosko";
import permintaanBantuan from "./permintaanBantuan";
import dataBencana from "./dataBencana";
import bantuanUtama from "./bantuanUtama";
import bantuanKeluar from "./bantuanKeluar";

export default combineReducers({
  alert,
  auth,
  profile,
  pengungsi,
  bantuanMasuk,
  fasilitasPosko,
  permintaanBantuan,
  dataBencana,
  bantuanUtama,
  bantuanKeluar,
});

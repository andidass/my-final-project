import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import pengungsi from "./pengungsi";
import bantuanMasuk from "./bantuanMasukPosko";
import fasilitasPosko from "./fasilitasPosko";
import permintaanBantuan from "./permintaanBantuan";
import dataBencana from "./dataBencana";
import bantuanUtama from "./bantuanUtama";

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
});

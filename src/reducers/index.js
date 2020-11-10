import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import pengungsi from "./pengungsi";
import bantuanMasuk from "./bantuanMasukPosko";
import fasilitasPosko from "./fasilitasPosko";

export default combineReducers({
  alert,
  auth,
  profile,
  pengungsi,
  bantuanMasuk,
  fasilitasPosko,
});

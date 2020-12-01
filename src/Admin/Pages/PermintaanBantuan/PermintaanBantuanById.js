import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import TabelData from "./TabelData";
import { getDataPermintaanById } from "../../../actions/permintaanBantuan";
import Spinner from "../../../Components/Spinner";
import { Button, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import HomeIcon from "@material-ui/icons/Home";

// import "./DataPosko.css";

const PermintaanBantuanById = ({
  match,
  getDataPermintaanById,
  permintaanBantuan: { permintaanBantuan, loading },
}) => {
  useEffect(() => {
    getDataPermintaanById(match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const b = (props) => (
    <Typography style={{ fontWeight: "bold" }}>{props.children}</Typography>
  );

  return permintaanBantuan === null || loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">
          {permintaanBantuan && permintaanBantuan.user.name}
        </Typography>
        <Typography variant="subtitle2">
          Data Permintaan Bantuan{" "}
          {permintaanBantuan && permintaanBantuan.user.name}
        </Typography>
      </div>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ArrowBackIosIcon />}
        style={{ margin: 8 }}
      >
        <Link to="/admin/permintaan-bantuan">Kembali</Link>
      </Button>
      <div className="data-posko">
        <Button
          variant="contained"
          size="small"
          color="primary"
          startIcon={<HomeIcon />}
          style={{ margin: 8 }}
        >
          <Link to={`/admin/data-posko/${permintaanBantuan.user._id}`}>
            Cek Profil Posko
          </Link>
        </Button>
        {/* <Typography variant="subtitle1">
          <b>Alamat :</b> {profile && profile.alamatPosko}
        </Typography>
        <Typography variant="subtitle1">
          <b>Kecamatan :</b> {profile && profile.kecPosko}
        </Typography>
        <Typography variant="subtitle1">
          <b>Kabupaten :</b> {profile && profile.kabPosko}
        </Typography>
        <Typography variant="subtitle1">
          <b>Koordinator Posko :</b> {profile && profile.petugas.namaPetugas}
        </Typography>
        <Typography variant="subtitle1">
          <b>Jabatan :</b> {profile && profile.petugas.jabatan}
        </Typography>
        <Typography variant="subtitle1" align="center">
          <b>Petugas / Relawan Posko</b>
        </Typography>
        <Typography variant="subtitle1">
        <b>Lokasi</b>{" "}
        {profile && profile.location.lat + " , " + profile.location.lng}
        </Typography>*/}
        <TabelData
          allData={permintaanBantuan && permintaanBantuan.dataPermintaanBantuan}
        />
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  permintaanBantuan: state.permintaanBantuan,
});

PermintaanBantuanById.propTypes = {
  getDataPermintaanById: PropTypes.func.isRequired,
  permintaanBantuan: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getDataPermintaanById })(
  PermintaanBantuanById
);

import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import TabelPetugas from "./TabelPetugas";
import { getDataPoskoById } from "../../../actions/profile.js";
import Spinner from "../../../Components/Spinner";
import { Button, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import "./DataPosko.css";

const AllDataPosko = ({
  match,
  getDataPoskoById,
  profile: { profile, loading },
  auth,
}) => {
  useEffect(() => {
    getDataPoskoById(match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const b = (props) => (
    <Typography style={{ fontWeight: "bold" }}>{props.children}</Typography>
  );
  return profile === null || loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">{profile && profile.namaPosko}</Typography>
        <Typography variant="subtitle2">
          Data Profile {profile && profile.namaPosko}
        </Typography>
      </div>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ArrowBackIosIcon />}
        style={{ margin: 8 }}
      >
        <Link to="/admin/data-posko">Kembali</Link>
      </Button>
      <div className="data-posko">
        <Typography variant="subtitle1">
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
        <TabelPetugas allPetugas={profile && profile.allPetugas} />
        <Typography variant="subtitle1">
          <b>Lokasi</b>{" "}
          {profile && profile.location.lat + " , " + profile.location.lng}
        </Typography>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

AllDataPosko.propTypes = {
  getDataPoskoById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getDataPoskoById })(AllDataPosko);

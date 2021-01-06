import React, { useState, useEffect, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deletePetugas } from "../../../actions/profile";
import TabelPetugas from "./TabelPetugas";
import Alert from "../../../layout/Alert";
import MapPosko from "../../../layout/Map";
import Spinner from "../../../Components/Spinner";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import EditIcon from "@material-ui/icons/Edit";

import { Grid, Paper, Typography, Box, Button } from "@material-ui/core";

const ProfilePosko = ({
  profile: { profile, loading },
  deletePetugas,
  auth: { user },
}) => {
  // posko
  const [profileData, setProfileData] = useState({
    namaPosko: "",
    alamatPosko: "",
    kelPosko: "",
    kecPosko: "",
    kabPosko: "",
    namaPetugas: "",
    jabatan: "",
    lat: "",
    lng: "",
    noHp: "",
  });

  const {
    namaPosko,
    alamatPosko,
    kelPosko,
    kecPosko,
    kabPosko,
    namaPetugas,
    jabatan,
    lat,
    lng,
    noHp,
  } = profileData;

  useEffect(() => {
    setProfileData({
      namaPosko: loading || !profile.namaPosko ? "" : profile.namaPosko,
      alamatPosko: loading || !profile.alamatPosko ? "" : profile.alamatPosko,
      kelPosko: loading || !profile.kelPosko ? "" : profile.kelPosko,
      kecPosko: loading || !profile.kecPosko ? "" : profile.kecPosko,
      kabPosko: loading || !profile.kabPosko ? "" : profile.kabPosko,
      lat: loading || !profile.location ? "" : profile.location.lat,
      lng: loading || !profile.location ? "" : profile.location.lng,
      namaPetugas:
        loading || !profile.petugas.namaPetugas
          ? ""
          : profile.petugas.namaPetugas,
      jabatan:
        loading || !profile.petugas.jabatan ? "" : profile.petugas.jabatan,
      noHp: loading || !profile.petugas.noHp ? "" : profile.petugas.noHp,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onDelete(index) {
    deletePetugas(index);
  }

  return profile && loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <Alert />
      <div className="sub-heading">
        <Typography variant="h5">Data Profile Pos Bencana</Typography>
        <Typography variant="subtitle2">
          Profile Pos {user && user.name}
        </Typography>
      </div>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ArrowBackIosIcon />}
        style={{ margin: 8 }}
      >
        <Link to="/pos/dashboard">Kembali</Link>
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<EditIcon />}
        style={{ margin: 8 }}
      >
        <Link to="/pos/data-pos/edit-profile" style={{ color: "white" }}>
          Edit Profile
        </Link>
      </Button>
      <Paper variant="outlined">
        {profile && (
          <div className="body-pos-bencana">
            <Grid container justify="space-around">
              <Grid xs={10} sm={4} item>
                <Typography
                  component="div"
                  align="center"
                  style={{ marginBottom: 10, fontWeight: "bold" }}
                >
                  <Box fontSize={17}>Data Pos</Box>
                </Typography>
                <Typography variant="subtitle1">
                  <b>Nama Pos :</b> {namaPosko}
                </Typography>
                <Typography variant="subtitle1">
                  <b>Alamat Pos :</b> {alamatPosko}
                </Typography>
                <Typography variant="subtitle1">
                  <b>Kelurahan/Desa :</b> {kelPosko}
                </Typography>
                <Typography variant="subtitle1">
                  <b>Kecamatan :</b> {kecPosko}
                </Typography>
                <Typography variant="subtitle1">
                  <b>Kabupaten :</b> {kabPosko}
                </Typography>
              </Grid>
              <Grid xs={10} sm={4} item>
                <Typography
                  component="div"
                  align="center"
                  style={{ marginBottom: 10, fontWeight: "bold" }}
                >
                  <Box fontSize={17}>Data Petugas Pos</Box>
                </Typography>
                <Typography variant="subtitle1">
                  <b>Nama Koor Petugas Pos :</b> {namaPetugas}
                </Typography>
                <Typography variant="subtitle1">
                  <b>Jabatan Petugas :</b> {jabatan}
                </Typography>
                <Typography variant="subtitle1">
                  <b>No Hp :</b> {noHp}
                </Typography>
              </Grid>
            </Grid>
            <Typography
              component="div"
              align="center"
              style={{ marginBottom: 10, fontWeight: "bold" }}
            >
              <Box fontSize={17}>Lokasi Pos</Box>
            </Typography>
            <MapPosko location={{ lat: lat, lng: lng }} namaPosko={namaPosko} />
          </div>
        )}
        <TabelPetugas rows={profile.allPetugas} onDelete={onDelete} />
      </Paper>
    </Fragment>
  );
};

ProfilePosko.propTypes = {
  deletePetugas: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { deletePetugas })(
  withRouter(ProfilePosko)
);

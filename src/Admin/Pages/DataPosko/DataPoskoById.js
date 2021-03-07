import React, { Fragment, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TabelPetugas from "./TabelPetugas";
import TabelPengungsi from "./TabelPengungsi";
import { getDataPoskoById } from "../../../actions/profile.js";
import { getDataPengungsiById } from "../../../actions/pengungsi";
import { getDataFasilitasPoskoByUserId } from "../../../actions/fasilitasPosko";
import MapPosko from "../../../layout/Map";
import Spinner from "../../../Components/Spinner";
import { Button, Typography, Grid } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import "./DataPosko.css";

const AllDataPosko = ({
  match,
  getDataPoskoById,
  getDataPengungsiById,
  getDataFasilitasPoskoByUserId,
  profile: { profile },
  pengungsi: { pengungsi, loading },
  fasilitasPosko: { fasilitasPosko },
  auth: { user },
}) => {
  useEffect(() => {
    getDataPoskoById(match.params.id);
    getDataPengungsiById(match.params.id);
    getDataFasilitasPoskoByUserId(match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if (!user) {
  //   return <Redirect to="/admin/dashboard" />;
  // }

  const b = (props) => (
    <Typography style={{ fontWeight: "bold" }}>{props.children}</Typography>
  );
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">
          Profile {profile && profile.namaPosko}
        </Typography>
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
        {!user ? (
          <Link to="/data-pos">Kembali</Link>
        ) : (
          <Link to="/admin/data-pos">Kembali</Link>
        )}
      </Button>
      <div className="data-posko">
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              align="center"
              className="title-data-posko"
            >
              <b>Profile {profile && profile.namaPosko}</b>
            </Typography>
            {!profile ? (
              <Typography variant="subtitle1" style={{ textAlign: "center" }}>
                Pos Tidak Memiliki Profile
              </Typography>
            ) : (
              <Fragment>
                <Typography variant="subtitle1">
                  <b>Alamat :</b> {profile.alamatPosko}
                </Typography>
                <Typography variant="subtitle1">
                  <b>Kecamatan :</b> {profile.kecPosko}
                </Typography>
                <Typography variant="subtitle1">
                  <b>Kabupaten :</b> {profile.kabPosko}
                </Typography>
                <Typography variant="subtitle1">
                  <b>Koordinator Posko :</b> {profile.petugas.namaPetugas}
                </Typography>
                <Typography variant="subtitle1">
                  <b>Jabatan :</b> {profile.petugas.jabatan}
                </Typography>
                <Typography variant="subtitle1">
                  <b>No Hp :</b> {profile.petugas.noHp}
                </Typography>
              </Fragment>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              align="center"
              className="title-data-posko"
            >
              <b>Fasilitas {profile && profile.namaPosko}</b>
            </Typography>
            {!fasilitasPosko ? (
              <Typography variant="subtitle1" style={{ textAlign: "center" }}>
                Pos Tidak Memiliki Data Fasilitas
              </Typography>
            ) : (
              <Fragment>
                <Typography variant="subtitle1">
                  <b>Fasilitas Kesehatan :</b> {fasilitasPosko.fkes}
                </Typography>
                <Typography variant="subtitle1">
                  <b>Fasilitas Pendidikan :</b> {fasilitasPosko.fpend}
                </Typography>
                <Typography variant="subtitle1">
                  <b>MCK :</b> {fasilitasPosko.mck}
                </Typography>
                <Typography variant="subtitle1">
                  <b>Mushollah :</b> {fasilitasPosko.musholah}
                </Typography>
                <Typography variant="subtitle1">
                  <b>Dapur Umum :</b> {fasilitasPosko.dapurUmum}
                </Typography>
                <Typography variant="subtitle1">
                  <b>Tendan Umum :</b> {fasilitasPosko.tendaUmum}
                </Typography>
              </Fragment>
            )}
          </Grid>
        </Grid>

        <Typography
          variant="subtitle1"
          align="center"
          className="title-data-posko"
        >
          <b>Petugas / Relawan {profile && profile.namaPosko}</b>
        </Typography>
        {profile && profile.allPetugas.length === 0 ? (
          <Typography variant="subtitle1">
            Tidak Ada Data Petugas / Relawan
          </Typography>
        ) : (
          <TabelPetugas allPetugas={profile && profile.allPetugas} />
        )}
        <Typography
          variant="subtitle1"
          align="center"
          className="title-data-posko"
        >
          <b>Pengungsi {profile && profile.namaPosko}</b>
        </Typography>
        {/* {JSON.stringify(pengungsi.allPengungsi.length)} */}
        {pengungsi && pengungsi.allPengungsi.length > 0 ? (
          <TabelPengungsi
            allPengungsi={pengungsi && pengungsi.allPengungsi}
            user={pengungsi && pengungsi.user}
          />
        ) : (
          <Typography variant="subtitle1">Tidak Ada Data Pengungsi</Typography>
        )}
        {/* {pengungsi && pengungsi.allPengungsi.length === 0 ? (
          <Typography variant="subtitle1">Tidak Ada Data Pengungsi</Typography>
        ) : (
          <Fragment>
            {pengungsi.allPengungsi > 0 && (
              <TabelPengungsi
                allPengungsi={pengungsi && pengungsi.allPengungsi}
                user={pengungsi && pengungsi.user}
              />
            )}
            {JSON.stringify(pengungsi.allPengungsi.length)}
          </Fragment>
        )} */}
        <Typography
          variant="subtitle1"
          align="center"
          className="title-data-posko"
        >
          <b>Lokasi {profile && profile.namaPosko}</b>
        </Typography>
        {profile && !profile.location ? (
          <Typography variant="subtitle1">
            Pos tidak memiliki lokasi koordinator
          </Typography>
        ) : (
          <MapPosko
            location={profile && profile.location}
            namaPosko={profile && profile.namaPosko}
          />
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  pengungsi: state.pengungsi,
  fasilitasPosko: state.fasilitasPosko,
});

AllDataPosko.propTypes = {
  getDataPoskoById: PropTypes.func.isRequired,
  getDataPengungsiById: PropTypes.func.isRequired,
  getDataFasilitasPoskoByUserId: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  pengungsi: PropTypes.object.isRequired,
  fasilitasPosko: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
  getDataPoskoById,
  getDataPengungsiById,
  getDataFasilitasPoskoByUserId,
})(AllDataPosko);

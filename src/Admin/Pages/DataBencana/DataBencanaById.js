import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Tabel from "./Tabel";
import TabelKerusakan from "./TabelKerusakan";

import { getDataBencanaById } from "../../../actions/dataBencana";
import { Redirect } from "react-router-dom";
import Spinner from "../../../Components/Spinner";
import MapPosko from "../../../layout/Map";
import { Button, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import RoomIcon from "@material-ui/icons/Room";

import "./style.css";

const DataBencana = ({
  match,
  getDataBencanaById,
  dataBencana: { dataBencana, loading },
  profile: { profile },
  auth: { user },
}) => {
  useEffect(() => {
    getDataBencanaById(match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [show, setShow] = useState(false);
  const b = (props) => (
    <Typography style={{ fontWeight: "bold" }}>{props.children}</Typography>
  );
  const handleClick = () => {
    setShow(!show);
  };
  if (!user) {
    return <Redirect to="/admin/login" />;
  }

  return loading ? (
    <Spinner />
  ) : !dataBencana ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Data Kejadian Bencana</Typography>
        <Typography variant="subtitle2">
          Kejadian Bencana Oleh Petugas{" "}
          {dataBencana && dataBencana.petugas.name}
        </Typography>
      </div>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ArrowBackIosIcon />}
        style={{ margin: 8 }}
      >
        <Link to="/admin/data-bencana">Kembali</Link>
      </Button>
      {dataBencana && (
        <div className="data-posko">
          <Typography variant="h6">
            <b>1. Kejadian Bencana</b>
          </Typography>
          <Typography variant="subtitle1">
            <b>Jenis Bencana :</b> {dataBencana.jenisBencana}
          </Typography>
          <Typography variant="subtitle1">
            <b>Tanggal Kejadian :</b> {dataBencana.tglKejadian}
          </Typography>
          <Typography variant="subtitle1">
            <b>Waktu Kejadian :</b> {dataBencana.waktuKejadian}
          </Typography>
          <Typography variant="subtitle1">
            <b>Lokasi</b>
          </Typography>
          <Typography variant="subtitle1">
            <b>Kabupaten :</b>
            {dataBencana.lokasiBencana && dataBencana.lokasiBencana.kabupaten}
          </Typography>
          <Typography variant="subtitle1">
            <b>Kecamatan :</b>
            {dataBencana.lokasiBencana && dataBencana.lokasiBencana.kec}
          </Typography>
          <Typography variant="subtitle1">
            <b>Kelurahan / Desa : </b>
            {dataBencana.lokasiBencana && dataBencana.lokasiBencana.kelurahan}
          </Typography>
          <Typography variant="subtitle1">
            <b>Letak Geografis</b>
          </Typography>
          <Typography variant="subtitle1">
            <b>Koordinat Bencana : </b>
            {dataBencana.lokasiBencana &&
              dataBencana.lokasiBencana.lat +
                ", " +
                dataBencana.lokasiBencana.lng}
            {dataBencana.lokasiBencana && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleClick}
                style={{ margin: 8 }}
                size="small"
                startIcon={<RoomIcon />}
              >
                {show ? "Sembunyikan" : "Tampilkan Lokasi"}
              </Button>
            )}
            {!show ? null : !dataBencana.lokasiBencana ? (
              <Typography variant="subtitle1">
                Petugas belum memberikan info titik bencana
              </Typography>
            ) : (
              <MapPosko
                location={dataBencana.lokasiBencana}
                namaPosko={dataBencana.jenisBencana}
              />
            )}
          </Typography>
          <Typography variant="subtitle1">
            <b>Cakupan Dampak Bencana : </b>
            {dataBencana.lokasiBencana && dataBencana.lokasiBencana.cakupan}
          </Typography>
          <Typography variant="subtitle1">
            <b>Penyebab Bencana : </b> {dataBencana.penyebab}
          </Typography>
          <Typography variant="subtitle1">
            <b>Deskripsi : </b> {dataBencana.desc}
          </Typography>
          <Typography variant="subtitle1">
            <b>Kondisi Cuaca : </b> {dataBencana.cuaca}
          </Typography>
          <hr />
          <Typography variant="h6">
            <b>2. Korban Jiwa</b>
          </Typography>
          {dataBencana && dataBencana.dataKorban.length === 0 ? (
            <Typography variant="subtitle1">
              Tidak ada data korban jiwa
            </Typography>
          ) : (
            <Tabel rows={dataBencana.dataKorban} />
          )}
          <hr />
          <Typography variant="h6">
            <b>3. Kerusakan</b>
          </Typography>
          {dataBencana && dataBencana.dataKerusakan.length === 0 ? (
            <Typography variant="subtitle1">
              Tidak ada data Kerusakan
            </Typography>
          ) : (
            <TabelKerusakan rows={dataBencana.dataKerusakan} />
          )}
          <hr />
          <Typography variant="h6">
            <b>4. Fasilitas Umum Yang Masih Bisa Digunakan</b>
          </Typography>
          {!dataBencana.fasum ? (
            <Typography variant="subtitle1">
              Tidak ada data Fasilitas Umum
            </Typography>
          ) : (
            <Fragment>
              <Typography variant="subtitle1">
                <b>Akses ke lokasi Bencana : </b>
                {dataBencana.fasum.aksesKeLokasi}
              </Typography>
              <Typography variant="subtitle1">
                <b>Sarana Transportasi (angkutan umum, ketersediaan BBM) : </b>
                {dataBencana.fasum.saranaTransportasi}
              </Typography>
              <Typography variant="subtitle1">
                <b>Jalur Komunikasi (seluler, telepon, radio Komunikasi) : </b>
                {dataBencana.fasum.jalurKomunikasi}
              </Typography>
              <Typography variant="subtitle1">
                <b>Keadaan jaringan listrik : </b>
                {dataBencana.fasum.keadaanJaringanListrik}
              </Typography>
              <Typography variant="subtitle1">
                <b>Keadaan jaringan air/air bersih: </b>
                {dataBencana.fasum.keadaanJaringanAir}
              </Typography>
              <Typography variant="subtitle1">
                <b>Fasilitas Kesehatan (RS, Puskesmas, Pustu) : </b>
                {dataBencana.fasum.fasKes}
              </Typography>
            </Fragment>
          )}
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  dataBencana: state.dataBencana,
  profile: state.profile,
  auth: state.auth,
});

DataBencana.propTypes = {
  getDataBencanaById: PropTypes.func.isRequired,
  dataBencana: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
  getDataBencanaById,
})(DataBencana);

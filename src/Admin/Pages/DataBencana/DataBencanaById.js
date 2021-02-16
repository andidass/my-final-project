import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Tabel from "./Tabel";
import TabelKerusakan from "./TabelKerusakan";

import { getDataBencanaById } from "../../../actions/dataBencana";
// import { Redirect } from "react-router-dom";
import Spinner from "../../../Components/Spinner";
import MapPosko from "../../../layout/Map";
import {
  Button,
  Typography,
  Paper,
  Table,
  TableRow,
  TableCell,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import RoomIcon from "@material-ui/icons/Room";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

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
  // if (!user) {
  //   return <Redirect to="/admin/dashboard" />;
  // }

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
      <Paper variant="outlined" style={{ margin: `5%` }}>
        {dataBencana && (
          <div className="data-posko">
            <Typography variant="h6">
              <b>1. Kejadian Bencana</b>
            </Typography>
            <Table>
              <TableRow>
                <TableCell variant="head">Jenis Bencana</TableCell>
                <TableCell>{dataBencana.jenisBencana}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Tanggal Kejadian</TableCell>
                <TableCell>{dataBencana.tglKejadian}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Waktu Kejadian</TableCell>
                <TableCell>{dataBencana.waktuKejadian}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Tanggal Kejadian</TableCell>
                <TableCell>{dataBencana.tglKejadian}</TableCell>
              </TableRow>
            </Table>
            <br />
            <Typography variant="subtitle1">
              <b>Lokasi</b>
            </Typography>
            <Table>
              <TableRow>
                <TableCell variant="head">Kabupaten</TableCell>
                <TableCell>
                  {dataBencana.lokasiBencana &&
                    dataBencana.lokasiBencana.kabupaten}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Kecamatan</TableCell>
                <TableCell>
                  {dataBencana.lokasiBencana && dataBencana.lokasiBencana.kec}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Kelurahan / Desa</TableCell>
                <TableCell>
                  {dataBencana.lokasiBencana &&
                    dataBencana.lokasiBencana.kelurahan}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Cakupan Dampak Bencana</TableCell>
                <TableCell>
                  {dataBencana.lokasiBencana &&
                    dataBencana.lokasiBencana.cakupan}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Penyebab Bencana</TableCell>
                <TableCell>{dataBencana && dataBencana.penyebab}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Deskripsi</TableCell>
                <TableCell>{dataBencana && dataBencana.desc}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Kondisi Cuaca</TableCell>
                <TableCell>{dataBencana && dataBencana.cuaca}</TableCell>
              </TableRow>
            </Table>
            <br />

            <Typography variant="subtitle1">
              <b>Letak Geografis</b>
            </Typography>
            <Table>
              <TableRow>
                <TableCell variant="head">Koordinat Bencana</TableCell>
                <TableCell>
                  {dataBencana.lokasiBencana &&
                    dataBencana.lokasiBencana.lat.toFixed(5) +
                      ", " +
                      dataBencana.lokasiBencana.lng.toFixed(5)}
                </TableCell>
              </TableRow>
            </Table>

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
            <br />
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
            <br />
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
            <br />
            <Typography variant="h6">
              <b>4. Fasilitas Umum Yang Masih Bisa Digunakan</b>
            </Typography>
            {!dataBencana.fasum ? (
              <Typography variant="subtitle1">
                Tidak ada data Fasilitas Umum
              </Typography>
            ) : (
              <Table>
                <TableRow>
                  <TableCell variant="head">Akses ke lokasi Bencana</TableCell>
                  <TableCell>{dataBencana.fasum.aksesKeLokasi}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head">
                    Sarana Transportasi (angkutan umum, ketersediaan BBM)
                  </TableCell>
                  <TableCell>{dataBencana.fasum.saranaTransportasi}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head">
                    Jalur Komunikasi (seluler, telepon, radio Komunikasi)
                  </TableCell>
                  <TableCell>{dataBencana.fasum.jalurKomunikasi}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head">Keadaan jaringan listrik</TableCell>
                  <TableCell>
                    {dataBencana.fasum.keadaanJaringanListrik}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head">
                    Keadaan jaringan air/air bersih
                  </TableCell>
                  <TableCell>{dataBencana.fasum.keadaanJaringanAir}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head">
                    Fasilitas Kesehatan (RS, Puskesmas, Pustu)
                  </TableCell>
                  <TableCell>{dataBencana.fasum.fasKes}</TableCell>
                </TableRow>
              </Table>
            )}
          </div>
        )}
      </Paper>
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

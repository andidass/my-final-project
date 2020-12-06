import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getDataBencanaById } from "../../../actions/dataBencana";
import Spinner from "../../../Components/Spinner";
import { Button, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import "./style.css";

const DataBencana = ({
  match,
  getDataBencanaById,
  dataBencana: { dataBencana, loading },
  profile: { profile },
}) => {
  useEffect(() => {
    getDataBencanaById(match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const b = (props) => (
    <Typography style={{ fontWeight: "bold" }}>{props.children}</Typography>
  );
  return dataBencana === null || loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">
          Laporan Bencana Petugas {dataBencana && dataBencana.petugas.name}
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
      <div className="data-posko">
        <Typography variant="subtitle1">
          <b>Rumah Rusak Berat :</b> {dataBencana && dataBencana.rumahrb}
        </Typography>
        <Typography variant="subtitle1">
          <b>Rumah Rusak Sedang :</b> {dataBencana && dataBencana.rumahrs}
        </Typography>
        <Typography variant="subtitle1">
          <b>Rumah Rusak Ringan :</b> {dataBencana && dataBencana.rumahrr}
        </Typography>
        <Typography variant="subtitle1">
          <b>Fasilitas Umum :</b> {dataBencana && dataBencana.fasum}
        </Typography>
        <Typography variant="subtitle1">
          <b>fasilitas Kesehatan :</b> {dataBencana && dataBencana.faskes}
        </Typography>
        <Typography variant="subtitle1">
          <b>Fasilitas Pendidikan :</b> {dataBencana && dataBencana.faspen}
        </Typography>
        <Typography variant="subtitle1">
          <b>Fasilitas Peribadatan : </b>{" "}
          {dataBencana && dataBencana.peribadatan}
        </Typography>
        <Typography variant="subtitle1">
          <b>Korban Terdampak : </b> {dataBencana && dataBencana.terdampak}
        </Typography>
        <Typography variant="subtitle1">
          <b>Korban Luka-luka : </b> {dataBencana && dataBencana.luka}
        </Typography>
        <Typography variant="subtitle1">
          <b>Korban Meninggal Dunia : </b> {dataBencana && dataBencana.md}
        </Typography>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  dataBencana: state.dataBencana,
  profile: state.profile,
});

DataBencana.propTypes = {
  getDataBencanaById: PropTypes.func.isRequired,
  dataBencana: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
  getDataBencanaById,
})(DataBencana);

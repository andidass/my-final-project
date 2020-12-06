import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getAllPermintaanBantuan } from "../../../actions/permintaanBantuan";
import DataPermintaan from "./DataPermintaan";
import Spinner from "../../../Components/Spinner";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./style.css";

const AdminPermintaanBantuan = ({
  getAllPermintaanBantuan,
  permintaanBantuan: { semuaPermintaanBantuan, loading },
  auth,
}) => {
  useEffect(() => {
    getAllPermintaanBantuan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [kataPencarian, setKataPencarian] = useState("");
  const onChange = (e) => setKataPencarian(e.target.value);

  // filter data with search feature
  const filteredData = semuaPermintaanBantuan.filter((data) => {
    return (
      data.user.name.toLowerCase().indexOf(kataPencarian.toLowerCase()) !== -1
    );
  });

  return semuaPermintaanBantuan.length === 0 || loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Permintaan Posko Pengungsian</Typography>
        <Typography variant="subtitle2">
          Data Permintaan Bantuan Tiap Posko Pengungsian
        </Typography>
      </div>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ArrowBackIosIcon />}
        style={{ margin: 8 }}
      >
        <Link to="/admin/dashboard">Kembali</Link>
      </Button>
      <div className="search">
        <TextField
          id="kataPencarian"
          placeholder="Cari Posko Pengungsian"
          style={{ minWidth: 300 }}
          margin="normal"
          variant="outlined"
          size="small"
          autoFocus
          onChange={(e) => onChange(e)}
          value={kataPencarian}
        />
      </div>
      <Grid container justify="center" className="grid-container text">
        {semuaPermintaanBantuan.length > 0 ? (
          filteredData.map((dataPermintaan) => (
            <DataPermintaan
              key={dataPermintaan._id}
              dataPermintaan={dataPermintaan}
              kataPencarian={kataPencarian}
            />
          ))
        ) : (
          <h4>Tidak Ada Data Permintaan Bantuan Ditemukan...</h4>
        )}
      </Grid>
    </Fragment>
  );
};

AdminPermintaanBantuan.propTypes = {
  getAllPermintaanBantuan: PropTypes.func.isRequired,
  permintaanBantuan: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  permintaanBantuan: state.permintaanBantuan,
  auth: state.auth,
});

export default connect(mapStateToProps, { getAllPermintaanBantuan })(
  AdminPermintaanBantuan
);

import React, { Fragment, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
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
  auth: { user },
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

  // if (!user) {
  //   return <Redirect to="/admin/dashboard" />;
  // }

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Permintaan Bantuan Pos Pengungsian</Typography>
        <Typography variant="subtitle2">
          List Permintaan Bantuan Seluruh Pos Pengungsian
        </Typography>
      </div>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ArrowBackIosIcon />}
        style={{ margin: 8 }}
      >
        {!user ? (
          <Link to="/main-page">Kembali</Link>
        ) : (
          <Link to="/admin/dashboard">Kembali</Link>
        )}
      </Button>
      <div className="search">
        <TextField
          id="kataPencarian"
          placeholder="Cari Pos Pengungsian"
          style={{ minWidth: 300 }}
          margin="normal"
          variant="outlined"
          size="small"
          autoFocus
          onChange={(e) => onChange(e)}
          value={kataPencarian}
        />
      </div>
      <div style={{ maxWidth: `95vw`, paddingLeft: `2.5vw` }}>
        <Grid container justify="center" className="grid-container text">
          {semuaPermintaanBantuan.length > 0 ? (
            filteredData.map((dataPermintaan) => (
              <DataPermintaan
                user={user}
                key={dataPermintaan._id}
                dataPermintaan={dataPermintaan}
                kataPencarian={kataPencarian}
              />
            ))
          ) : (
            <div className="no-data">
              <h4>Tidak Ada Data Permintaan Bantuan Ditemukan...</h4>
              <img
                src="/img/undraw_empty_xct9.svg"
                alt="React Logo"
                style={{ width: `40%` }}
              />
            </div>
          )}
        </Grid>
      </div>
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

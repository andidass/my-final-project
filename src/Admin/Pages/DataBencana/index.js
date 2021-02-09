import React, { Fragment, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getAllDataBencana } from "../../../actions/dataBencana";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import Spinner from "../../../Components/Spinner";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import "./style.css";
import DataBencana from "./DataBencana";

const AllDataBencana = ({
  getAllDataBencana,
  dataBencana: { allDataBencana, loading },
  auth: { user },
}) => {
  useEffect(() => {
    getAllDataBencana();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [kataPencarian, setKataPencarian] = useState("");
  const onChange = (e) => setKataPencarian(e.target.value);

  // filter data with search feature
  const filteredData = allDataBencana.filter((dataBencana) => {
    return (
      dataBencana.petugas.name
        .toLowerCase()
        .indexOf(kataPencarian.toLowerCase()) !== -1
    );
  });

  // if (!user) {
  //   return <Redirect to="/admin/dashboard" />;
  // }

  return loading ? (
    <Spinner />
  ) : allDataBencana.length === 0 ? (
    <div className="no-data">
      <img
        src="/img/undraw_empty_xct9.svg"
        alt="React Logo"
        style={{ width: `40%` }}
      />
    </div>
  ) : (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Data Bencana</Typography>
        <Typography variant="subtitle2">
          Semua Data Bencana (Sumber TRC)
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
          placeholder="cari pos pengungsian"
          style={{ minWidth: 300 }}
          margin="normal"
          variant="outlined"
          size="small"
          autoFocus
          onChange={(e) => onChange(e)}
          value={kataPencarian}
        />
      </div>
      <Grid container justify="center" className="grid-container">
        {allDataBencana.length > 0 ? (
          filteredData.map((dataBencana) => (
            <DataBencana
              user={user}
              key={dataBencana._id}
              dataBencana={dataBencana}
              kataPencarian={kataPencarian}
            />
          ))
        ) : (
          <h4>Tidak Ada Data Benacana Ditemukan...</h4>
        )}
      </Grid>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  dataBencana: state.dataBencana,
  auth: state.auth,
});

AllDataBencana.propTypes = {
  getAllDataBencana: PropTypes.func.isRequired,
  dataBencana: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getAllDataBencana })(AllDataBencana);

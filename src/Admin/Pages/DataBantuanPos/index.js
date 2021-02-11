import React, { Fragment, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DataPos from "./DataPos";

import { getAllDataBantuanMasuk } from "../../../actions/bantuanMasukPos";
import { getAllDataBantuanKeluar } from "../../../actions/bantuanKeluarPos";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import Spinner from "../../../Components/Spinner";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const AllDataPosko = ({
  getAllDataBantuanMasuk,
  getAllDataBantuanKeluar,
  bantuanMasuk: { semuaBantuanMasuk, loading },
  auth: { user },
}) => {
  useEffect(() => {
    getAllDataBantuanMasuk();
    getAllDataBantuanKeluar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [kataPencarian, setKataPencarian] = useState("");
  const onChange = (e) => setKataPencarian(e.target.value);

  // filter data with search feature
  const filteredPosko = semuaBantuanMasuk.filter((bantuanMasuk) => {
    return (
      bantuanMasuk.user.name
        .toLowerCase()
        .indexOf(kataPencarian.toLowerCase()) !== -1
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
        <Typography variant="h5">Pos Pengungsian</Typography>
        <Typography variant="subtitle2">Data semua pos</Typography>
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
        {filteredPosko.length > 0 ? (
          filteredPosko.map((bantuanMasuk) => (
            <DataPos
              user={user}
              name={bantuanMasuk.user}
              key={bantuanMasuk._id}
              bantuanMasuk={bantuanMasuk}
              kataPencarian={kataPencarian}
            />
          ))
        ) : (
          <h4>Tidak Ada Profile Ditemukan...</h4>
        )}
      </Grid>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  bantuanMasuk: state.bantuanMasuk,
  auth: state.auth,
});

AllDataPosko.propTypes = {
  getAllDataBantuanMasuk: PropTypes.func.isRequired,
  getAllDataBantuanKeluar: PropTypes.func.isRequired,
  bantuanMasuk: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
  getAllDataBantuanMasuk,
  getAllDataBantuanKeluar,
})(AllDataPosko);

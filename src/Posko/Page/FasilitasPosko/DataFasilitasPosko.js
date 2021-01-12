import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { withRouter, Link } from "react-router-dom";
import { createFasilitasPosko } from "../../../actions/fasilitasPosko";
import Alert from "../../../layout/Alert";
import Spinner from "../../../Components/Spinner";
import { Button, Typography, Paper, TextField } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./style.css";

const DataFasilitasPosko = ({
  createFasilitasPosko,
  fasilitasPosko: { fasilitasPosko, loading },
  history,
  auth: { user },
}) => {
  const [dataFasilitas, setDataFasilitas] = useState({
    fkes: "",
    fpend: "",
    mck: "",
    musholah: "",
    dapurUmum: "",
    tendaUmum: "",
  });
  // get data fasilitas posko
  useEffect(() => {
    setDataFasilitas({
      fkes: loading || !fasilitasPosko ? "0" : fasilitasPosko.fkes,
      fpend: loading || !fasilitasPosko ? "0" : fasilitasPosko.fpend,
      mck: loading || !fasilitasPosko ? "0" : fasilitasPosko.mck,
      musholah: loading || !fasilitasPosko ? "0" : fasilitasPosko.musholah,
      dapurUmum: loading || !fasilitasPosko ? "0" : fasilitasPosko.dapurUmum,
      tendaUmum: loading || !fasilitasPosko ? "0" : fasilitasPosko.tendaUmum,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeHandler = (e) => {
    return setDataFasilitas({
      ...dataFasilitas,
      [e.target.id]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    createFasilitasPosko(dataFasilitas, history, true);
  };

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Data Fasilitas Pos</Typography>
        <Typography variant="subtitle2">
          Edit Data Fasilitas Pos {user && user.name}
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

      <form onSubmit={(e) => onSubmit(e)}>
        <div className="isi full-height">
          <Paper variant="outlined" className="body-posko-bencana">
            <div
              className="body-posko-bencana"
              style={{ display: "inline-grid" }}
            >
              {/* <div> */}
              <TextField
                id="fkes"
                label="Fasilitas Kesehatan"
                style={{ margin: 8 }}
                margin="normal"
                variant="outlined"
                size="small"
                type="number"
                onChange={(e) => changeHandler(e)}
                value={dataFasilitas.fkes}
              />
              {/* </div> */}
              {/* <div> */}
              <TextField
                id="fpend"
                label="Fasilitas Pendidikan"
                style={{ margin: 8 }}
                margin="normal"
                variant="outlined"
                size="small"
                type="number"
                onChange={(e) => changeHandler(e)}
                value={dataFasilitas.fpend}
              />
              {/* </div> */}
              <TextField
                id="mck"
                label="MCK"
                style={{ margin: 8 }}
                margin="normal"
                variant="outlined"
                size="small"
                type="number"
                onChange={(e) => changeHandler(e)}
                value={dataFasilitas.mck}
              />
              <TextField
                id="musholah"
                label="musholah"
                style={{ margin: 8 }}
                margin="normal"
                variant="outlined"
                size="small"
                type="number"
                onChange={(e) => changeHandler(e)}
                value={dataFasilitas.musholah}
              />
              <TextField
                id="dapurUmum"
                label="Dapur Umum"
                style={{ margin: 8 }}
                margin="normal"
                variant="outlined"
                size="small"
                type="number"
                onChange={(e) => changeHandler(e)}
                value={dataFasilitas.dapurUmum}
              />
              <TextField
                id="tendaUmum"
                label="Tenda Utama"
                style={{ margin: 8 }}
                margin="normal"
                variant="outlined"
                size="small"
                type="number"
                onChange={(e) => changeHandler(e)}
                value={dataFasilitas.tendaUmum}
              />
              <div>
                <Alert />
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  size="small"
                  startIcon={<SaveIcon />}
                  style={{ margin: 8 }}
                >
                  Simpan
                </Button>
              </div>
            </div>
          </Paper>
        </div>
      </form>
    </Fragment>
  );
};

DataFasilitasPosko.propTypes = {
  createFasilitasPosko: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  fasilitasPosko: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  fasilitasPosko: state.fasilitasPosko,
});

export default connect(mapStateToProps, {
  createFasilitasPosko,
})(withRouter(DataFasilitasPosko));

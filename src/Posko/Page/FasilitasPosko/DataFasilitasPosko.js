import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { withRouter, Link } from "react-router-dom";
import { createFasilitasPosko } from "../../../actions/fasilitasPosko";
import Alert from "../../../layout/Alert";
import Spinner from "../../../Components/Spinner";
import { Button, Typography, Paper, TextField, Grid } from "@material-ui/core";
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
      fkes: loading || !fasilitasPosko ? "" : fasilitasPosko.fkes,
      fpend: loading || !fasilitasPosko ? "" : fasilitasPosko.fpend,
      mck: loading || !fasilitasPosko ? "" : fasilitasPosko.mck,
      musholah: loading || !fasilitasPosko ? "" : fasilitasPosko.musholah,
      dapurUmum: loading || !fasilitasPosko ? "" : fasilitasPosko.dapurUmum,
      tendaUmum: loading || !fasilitasPosko ? "" : fasilitasPosko.tendaUmum,
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
        <div className="isi">
          <Paper variant="outlined" className="body-posko-bencana">
            <Grid
              container
              // spacing={2}
              style={{ textAlign: "center" }}
            >
              <Grid item xs={12} sm={6} style={{ padding: `2%` }}>
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
                  label="Musholah"
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
                    style={{ margin: 8, minWidth: 200 }}
                  >
                    Simpan
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <img
                  src="/cover/posko.jpeg"
                  style={{ width: `100% `, height: `100%`, objectFit: "cover" }}
                />
              </Grid>
            </Grid>
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

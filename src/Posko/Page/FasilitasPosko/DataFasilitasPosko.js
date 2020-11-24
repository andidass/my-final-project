import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { createFasilitasPosko } from "../../../actions/fasilitasPosko";
import Alert from "../../../layout/Alert";
import Spinner from "../../../Components/Spinner";
import { Button, Typography, Box, Paper, TextField } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
// import Count from "./Count";

const DataFasilitasPosko = ({
  createFasilitasPosko,
  fasilitasPosko: { fasilitasPosko, loading },
  history,
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
      fkes: loading || !fasilitasPosko.fkes ? "0" : fasilitasPosko.fkes,
      fpend: loading || !fasilitasPosko.fpend ? "0" : fasilitasPosko.fpend,
      mck: loading || !fasilitasPosko.mck ? "0" : fasilitasPosko.mck,
      musholah:
        loading || !fasilitasPosko.musholah ? "0" : fasilitasPosko.musholah,
      dapurUmum:
        loading || !fasilitasPosko.dapurUmum ? "0" : fasilitasPosko.dapurUmum,
      tendaUmum:
        loading || !fasilitasPosko.tendaUmum ? "0" : fasilitasPosko.tendaUmum,
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
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="isi full-height">
        <Typography component="div">
          <Box
            fontSize={18}
            fontWeight="fontWeightBold"
            textAlign="center"
            marginTop={3}
          >
            Fasilitas Posko
          </Box>
        </Typography>
        <Paper variant="outlined" className="body-posko-bencana">
          <div className="body-posko-bencana" style={{ display: "block" }}>
            {/* fasilitas : MCK, Kesehatan, Ibadah, Pendidikan */}
            <TextField
              id="fkes"
              label="Fasilitas Kesehatan"
              style={{ margin: 8 }}
              margin="normal"
              variant="outlined"
              size="small"
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
              onChange={(e) => changeHandler(e)}
              value={dataFasilitas.fpend}
            />
            <TextField
              id="mck"
              label="MCK"
              style={{ margin: 8 }}
              margin="normal"
              variant="outlined"
              size="small"
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

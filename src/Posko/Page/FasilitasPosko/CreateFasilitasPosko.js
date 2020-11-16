import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import {
  getDataFasilitasPosko,
  createFasilitasPosko,
} from "../../../actions/fasilitasPosko";
import Alert from "../../../layout/Alert";
import Spinner from "../../../Components/Spinner";
import {
  Button,
  Typography,
  Box,
  Paper,
  Grid,
  TextField,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { setAlert } from "../../../actions/alert";
// import Count from "./Count";

const CreateFasilitasPosko = ({
  getDataFasilitasPosko,
  createFasilitasPosko,
  fasilitasPosko: { fasilitasPosko, loading },
  history,
}) => {
  // get data fasilitas posko
  useEffect(() => {
    getDataFasilitasPosko();
  }, [getDataFasilitasPosko]);

  const [dataFasilitas, setDataFasilitas] = useState({
    fkes: "",
    fpend: "",
    mck: "",
    musholah: "",
    dapurUmum: "",
    tendaUmum: "",
  });
  const changeHandler = (e) => {
    return setDataFasilitas({
      ...dataFasilitas,
      [e.target.id]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    createFasilitasPosko(dataFasilitas);
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

CreateFasilitasPosko.propTypes = {
  getDataFasilitasPosko: PropTypes.func.isRequired,
  createFasilitasPosko: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  fasilitasPosko: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  fasilitasPosko: state.fasilitasPosko,
});

export default connect(mapStateToProps, {
  getDataFasilitasPosko,
  createFasilitasPosko,
})(withRouter(CreateFasilitasPosko));

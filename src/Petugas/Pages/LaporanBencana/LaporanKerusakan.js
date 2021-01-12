import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Alert from "../../../layout/Alert";
import {
  insertDataKerusakan,
  deleteDataKerusakan,
} from "../../../actions/dataBencana";
import {
  Grid,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@material-ui/core";
import TabelKerusakan from "./TabelKerusakan";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "./style.css";

const jenisBidangKat = [
  {
    value: "Permukiman",
    label: "Permukiman",
  },
  {
    value: "Infrastruktur",
    label: "Infrastruktur",
  },
  {
    value: "Ekonomi Produktif",
    label: "Ekonomi Produktif",
  },
  {
    value: "Sosial",
    label: "Sosial",
  },
  {
    value: "Lintas Sektor",
    label: "Lintas Sektor",
  },
];

const permukimanOpt = [
  {
    value: "Permukiman",
    label: "Permukiman",
  },
  {
    value: "Jalan Lingkungan",
    label: "Jalan Lingkungan",
  },
  {
    value: "Sistem Air Minum",
    label: "Sistem Air Minum",
  },
];

const InfrastrukturOpt = [
  {
    value: "Transportasi Darat",
    label: "Transportasi Darat",
  },
  {
    value: "Transportasi Air",
    label: "Transportasi Air",
  },
  {
    value: "Transportasi Udara",
    label: "Transportasi Udara",
  },
  {
    value: "Sistem Drainase",
    label: "Sistem Drainase",
  },
  {
    value: "Sistem Listrik",
    label: "Sistem Listrik",
  },
];

const ekonomiOpt = [
  {
    value: "Pertanian",
    label: "Pertanian",
  },
  {
    value: "Perkebunan",
    label: "Perkebunan",
  },
  {
    value: "Peternakan",
    label: "Peternakan",
  },
  {
    value: "Perikanan",
    label: "Perikanan",
  },
  {
    value: "Perdagangan",
    label: "Perdagangan",
  },
  {
    value: "Perindustrian",
    label: "Perindustrian",
  },
  {
    value: "Pariwisata",
    label: "Pariwisata",
  },
];

const sosialOpt = [
  {
    value: "Pendidikan",
    label: "Pendidikan",
  },
  {
    value: "Keagamaan",
    label: "Keagamaan",
  },
  {
    value: "Kesehatan",
    label: "Kesehatan",
  },
];

const lintasSektorOpt = [
  {
    value: "Perkantoran",
    label: "Perkantoran",
  },
  {
    value: "Perbankan",
    label: "Perbankan",
  },
  {
    value: "Lingkungan",
    label: "Lingkungan",
  },
];

const LaporanKerusakan = ({
  dataBencana: { dataBencana },
  insertDataKerusakan,
  deleteDataKerusakan,
  auth: { user },
}) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    jenisBidang: "Permukiman",
    bidang: "",
    wilayah: "",
    jenisKerusakan: "",
    rusakBerat: 0,
    rusakSedang: 0,
    rusakRingan: 0,
    total: 0,
    satuan: "",
  });

  const {
    jenisBidang,
    bidang,
    wilayah,
    jenisKerusakan,
    rusakBerat,
    rusakSedang,
    rusakRingan,
    satuan,
    total,
  } = data;

  function addItem(e) {
    e.preventDefault();
    insertDataKerusakan(data);
    setData({
      jenisBidang: "Permukiman",
      bidang: "",
      wilayah: "",
      jenisKerusakan: "",
      rusakBerat: 0,
      rusakSedang: 0,
      rusakRingan: 0,
      total: 0,
      satuan: "",
    });
  }

  // hapus data pada tabel
  function deleteItem(id) {
    deleteDataKerusakan(id);
  }

  const onChange = (e) =>
    setData({
      ...data,
      [e.target.name]: e.target.value,
      total:
        parseInt(rusakBerat) + parseInt(rusakSedang) + parseInt(rusakRingan),
    });
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">Kerusakan</Typography>
        <Typography variant="subtitle2">
          Data Kerusakan Akibat Bencana
        </Typography>
      </div>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ArrowBackIosIcon />}
        style={{ margin: 8 }}
      >
        <Link to="/petugas/data-bencana">Kembali</Link>
      </Button>

      <Grid container justify="center">
        <Paper variant="outlined" className="paper-form">
          <Grid item style={{ padding: `2rem` }}>
            <Typography component="div">
              <Box fontSize={17}>
                <b>Data Kerusakan Bencana</b>
              </Box>
            </Typography>
            <form type="submit" onSubmit={(e) => addItem(e)}>
              {show ? (
                <Fragment>
                  <div>
                    <TextField
                      name="jenisBidang"
                      label="Jenis Bidang"
                      style={{ maxWidth: 500 }}
                      margin="normal"
                      variant="outlined"
                      size="small"
                      required
                      fullWidth
                      select
                      SelectProps={{
                        native: true,
                      }}
                      onChange={(e) => onChange(e)}
                      value={jenisBidang}
                    >
                      {jenisBidangKat.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </div>
                  <TextField
                    name="bidang"
                    label="Bidang / Sektor"
                    style={{ margin: 8, maxWidth: 500 }}
                    margin="normal"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                    select
                    SelectProps={{
                      native: true,
                    }}
                    onChange={(e) => onChange(e)}
                    value={bidang}
                  >
                    {jenisBidang === "Permukiman"
                      ? permukimanOpt.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))
                      : jenisBidang === "Infrastruktur"
                      ? InfrastrukturOpt.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))
                      : jenisBidang === "Ekonomi Produktif"
                      ? ekonomiOpt.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))
                      : jenisBidang === "Sosial"
                      ? sosialOpt.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))
                      : jenisBidang === "Lintas Sektor"
                      ? lintasSektorOpt.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))
                      : null}
                  </TextField>

                  <TextField
                    name="wilayah"
                    label="Wilayah"
                    style={{ margin: 8, maxWidth: 500 }}
                    margin="normal"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                    onChange={(e) => onChange(e)}
                    value={wilayah}
                  />
                  <TextField
                    name="jenisKerusakan"
                    label="Jenis Kerusakan"
                    style={{ margin: 8, maxWidth: 500 }}
                    margin="normal"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                    onChange={(e) => onChange(e)}
                    value={jenisKerusakan}
                  />
                  <TextField
                    name="rusakBerat"
                    label="Rusak Berat"
                    style={{ margin: 8, maxWidth: 500 }}
                    margin="normal"
                    type="number"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                    onChange={(e) => onChange(e)}
                    value={rusakBerat}
                  />
                  <TextField
                    name="rusakSedang"
                    label="Rusak Sedang"
                    style={{ margin: 8, maxWidth: 500 }}
                    margin="normal"
                    type="number"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                    onChange={(e) => onChange(e)}
                    value={rusakSedang}
                  />
                  <TextField
                    name="rusakRingan"
                    label="Rusak Ringan"
                    style={{ margin: 8, maxWidth: 500 }}
                    margin="normal"
                    type="number"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                    onChange={(e) => onChange(e)}
                    value={rusakRingan}
                  />
                  <TextField
                    name="total"
                    label="Total Kerusakan"
                    style={{ margin: 8, maxWidth: 500 }}
                    margin="normal"
                    type="number"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                    disabled
                    onChange={(e) => onChange(e)}
                    value={total}
                    // value={
                    // parseInt(rusakBerat) +
                    // parseInt(rusakSedang) +
                    // parseInt(rusakRingan)
                    // }
                  />
                  {/* <Button onClick={(e) => sum(e)}></Button> */}
                  <TextField
                    name="satuan"
                    label="Satuan"
                    style={{ margin: 8, maxWidth: 500 }}
                    margin="normal"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                    onChange={(e) => onChange(e)}
                    value={satuan}
                  />
                  <br />
                  <Alert />
                  <Button
                    variant="contained"
                    className="button"
                    color="primary"
                    type="submit"
                    style={{ margin: 8, maxWidth: 500 }}
                    startIcon={<SaveIcon />}
                  >
                    Simpan
                  </Button>
                </Fragment>
              ) : null}
              <Button
                variant="contained"
                className="button"
                color={show ? "secondary" : "primary"}
                style={{ margin: 8, maxWidth: 500 }}
                startIcon={show ? <CancelIcon /> : <AddCircleIcon />}
                onClick={handleShow}
              >
                {show ? "Sembunyikan" : "Tambah"}
              </Button>
            </form>
          </Grid>
          {dataBencana && dataBencana.dataKerusakan.length > 0 ? (
            <TabelKerusakan
              rows={dataBencana.dataKerusakan}
              deleteItem={deleteItem}
            />
          ) : (
            <div className="no-data">
              <Typography variant="subtitle1">
                <img
                  src="/img/undraw_empty_xct9.svg"
                  alt="React Logo"
                  style={{ width: `40%` }}
                />
              </Typography>
            </div>
          )}
        </Paper>
      </Grid>
    </Fragment>
  );
};

LaporanKerusakan.propTypes = {
  insertDataKerusakan: PropTypes.func.isRequired,
  deleteDataKerusakan: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  dataBencana: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  dataBencana: state.dataBencana,
});

export default connect(mapStateToProps, {
  insertDataKerusakan,
  deleteDataKerusakan,
})(LaporanKerusakan);

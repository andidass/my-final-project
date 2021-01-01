import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
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

const LaporanKerusakan = () => {
  const [rows, setRows] = useState([]);
  const [show, setShow] = useState(false);
  const [dataKerusakan, setDataKerusakan] = useState({
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
    total,
    satuan,
  } = dataKerusakan;

  function addItem(e) {
    e.preventDefault();
    setRows((prevRows) => {
      return [...prevRows, dataKerusakan];
    });
    setDataKerusakan({
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
    // console.log(rows);
  }

  const onChange = (e) =>
    setDataKerusakan({ ...dataKerusakan, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // createDataBencana(dataKejadian, history, true);
  };

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
                      id="jenisBidang"
                      label="Jenis Bidang"
                      style={{ maxWidth: 500 }}
                      margin="normal"
                      variant="outlined"
                      size="small"
                      required
                      fullWidth
                      required
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
                    onChange={(e) => onChange(e)}
                    value={bidang}
                  />
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
                    // value={`${rusakBerat * 2}`}
                    value={
                      parseInt(rusakBerat) +
                      parseInt(rusakSedang) +
                      parseInt(rusakRingan)
                    }
                  />
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
          {rows.length > 0 ? (
            <TabelKerusakan
              rows={rows}
              // deleteItem={deleteItem}
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

export default LaporanKerusakan;

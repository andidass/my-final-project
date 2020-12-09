import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBantuanKeluar } from "../../../actions/bantuanKeluar";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.tanggal}
        </TableCell>
        <TableCell>{row.namaPenerima}</TableCell>
        <TableCell align="right">{row.jabatan}</TableCell>
        <TableCell align="right">{row._id}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Data List Bantuan Masuk
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Nama Barang</TableCell>
                    <TableCell>Satuan</TableCell>
                    <TableCell align="right">Banyaknya</TableCell>
                    <TableCell align="right">Nilai Barang (Rp)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.dataItemBantuan.map((dataRow) => (
                    <TableRow key={dataRow.date}>
                      <TableCell component="th" scope="row">
                        {dataRow.namaBarang}
                      </TableCell>
                      <TableCell>{dataRow.satuan}</TableCell>
                      <TableCell align="right">{dataRow.banyaknya}</TableCell>
                      <TableCell align="right">{dataRow.nilainya}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function TabelBantuanMasuk({
  getBantuanKeluar,
  bantuanKeluar: { bantuanKeluar, loading },
}) {
  useEffect(() => {
    getBantuanKeluar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Tanggal</TableCell>
            <TableCell>Nama Penerima</TableCell>
            <TableCell align="right">Jabatan</TableCell>
            <TableCell align="right">Kode Transaksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bantuanKeluar &&
            bantuanKeluar.dataBantuanKeluar.map((row, index) => (
              <Row key={index} row={row} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

TabelBantuanMasuk.propTypes = {
  getBantuanKeluar: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  bantuanKeluar: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  bantuanKeluar: state.bantuanKeluar,
});
export default connect(mapStateToProps, { getBantuanKeluar })(
  TabelBantuanMasuk
);
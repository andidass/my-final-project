import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getBantuanMasuk } from "../../../actions/bantuanMasuk";
// import Alert from "../../../layout/Alert";
import Spinner from "../../../Components/Spinner";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Box, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const DataBantuanMasuk = ({
  getBantuanMasuk,
  bantuanMasuk: { bantuanMasuk, loading },
}) => {
  const classes = useStyles();
  useEffect(() => {
    getBantuanMasuk();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // function cekState(e) {
  //   e.preventDefault();
  //   console.log(bantuanMasuk);
  //   console.log(bantuanMasuk.dataBantuanMasuk);
  // }

  return loading ? (
    <Spinner />
  ) : (
    <form>
      <Typography component="div">
        <Box
          fontWeight="fontWeightBold"
          textAlign="center"
          fontSize={18}
          marginTop={5}
        >
          Daftar Bantuan Masuk
        </Box>
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nama Donatur</TableCell>
              <TableCell align="right">Sumber Dana</TableCell>
              <TableCell align="right">Tanggal</TableCell>
              <TableCell align="right">ID</TableCell>
            </TableRow>
          </TableHead>
          {/* <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={(e) => cekState(e)} // memanggil fungsi dan mengambil index (utk lakukan delete item)
          >
            Cek state
          </Button> */}
          <TableBody>
            {bantuanMasuk &&
              bantuanMasuk.dataBantuanMasuk.map((item, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {item.namaDonatur}
                  </TableCell>
                  <TableCell align="right">{item.sumberDana}</TableCell>
                  <TableCell align="right">{item.tanggal}</TableCell>
                  <TableCell align="right">{item._id}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      // onClick={() => props.deleteItem(index)} // memanggil fungsi dan mengambil index (utk lakukan delete item)
                    >
                      Detail
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="secondary" size="small">
        <Link to="/admin/bantuan-masuk">Tambah Data</Link>
      </Button>
    </form>
  );
};

DataBantuanMasuk.propTypes = {
  getBantuanMasuk: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  bantuanMasuk: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  getBantuanMasuk: state.bantuanMasuk,
  auth: state.auth,
  bantuanMasuk: state.bantuanMasuk,
});
export default connect(mapStateToProps, { getBantuanMasuk })(DataBantuanMasuk);

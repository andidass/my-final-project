import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Box, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable({ rows, deleteItem }) {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <Fragment>
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
              <TableCell>Nama Barang</TableCell>
              <TableCell align="right">Satuan</TableCell>
              <TableCell align="right">Banyaknya</TableCell>
              <TableCell align="right">Nilainya</TableCell>
              <TableCell align="right">Jenis Bantuan</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {item.namaBarang}
                    </TableCell>
                    <TableCell align="right">{item.satuan}</TableCell>
                    <TableCell align="right">{item.banyaknya}</TableCell>
                    <TableCell align="right">{item.nilainya}</TableCell>
                    <TableCell align="right">{item.jenisBantuan}</TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        onClick={() => deleteItem(index)} // memanggil fungsi dan mengambil index (utk lakukan delete item)
                      >
                        <DeleteIcon fontSize="small" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Fragment>
  );
}

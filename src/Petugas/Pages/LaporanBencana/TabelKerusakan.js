import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Box, Typography, TablePagination } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import "./style.css";

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
    <div className="table">
      <Typography component="div">
        <Box
          fontWeight="fontWeightBold"
          textAlign="center"
          fontSize={18}
          marginTop={5}
        >
          Daftar Data Kerusakan
        </Box>
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Bidang / Sektor</TableCell>
              <TableCell align="right">Wilayah</TableCell>
              <TableCell align="right">Jenis Kerusakan</TableCell>
              <TableCell align="right">RB</TableCell>
              <TableCell align="right">RS</TableCell>
              <TableCell align="right">RR</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Satuan</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((data, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {/* {data.namaPengungsi} */}
                      {data.bidang}
                    </TableCell>
                    <TableCell align="right">{data.wilayah}</TableCell>
                    <TableCell align="right">{data.jenisKerusakan}</TableCell>
                    <TableCell align="right">{data.rusakBerat}</TableCell>
                    <TableCell align="right">{data.rusakSedang}</TableCell>
                    <TableCell align="right">{data.rusakRingan}</TableCell>
                    <TableCell align="right">{data.total}</TableCell>
                    <TableCell align="right">{data.satuan}</TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        onClick={() => deleteItem(data._id)} // memanggil fungsi dan mengambil index (utk lakukan delete item)
                      >
                        <DeleteIcon fontSize="small" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
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
    </div>
  );
}

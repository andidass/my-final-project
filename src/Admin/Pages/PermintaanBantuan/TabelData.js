import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Paper, TablePagination, Chip } from "@material-ui/core";

export default function TabelData({ rows }) {
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
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nama Barang</TableCell>
            <TableCell align="left">Satuan</TableCell>
            <TableCell align="left">Banyaknya</TableCell>
            <TableCell align="left">Jenis Barang</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.namaBarang}
                  </TableCell>
                  <TableCell align="left">{row.satuan}</TableCell>
                  <TableCell align="left">{row.banyaknya}</TableCell>
                  <TableCell align="left">
                    {row.jenisBantuan === "Utama" ? (
                      <Chip
                        color="primary"
                        size="small"
                        label={row.jenisBantuan}
                      />
                    ) : (
                      <Chip
                        color="secondary"
                        size="small"
                        label={row.jenisBantuan}
                      />
                    )}
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
  );
}

import React, { Fragment } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Paper, TablePagination } from "@material-ui/core";
// import { DataGrid } from "@material-ui/data-grid";

export default function TabelPengungsi({ allPengungsi, user }) {
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
    rowsPerPage -
    Math.min(rowsPerPage, allPengungsi.length - page * rowsPerPage);

  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nama Pengungsi</TableCell>
              <TableCell align="right">Jenis Kelamin</TableCell>
              <TableCell align="right">Umur</TableCell>
              <TableCell align="right">Keadaan</TableCell>
              <TableCell align="right">Alamat</TableCell>
              <TableCell align="right">Posko</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allPengungsi.length > 0 &&
              allPengungsi
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {row.namaPengungsi}
                    </TableCell>
                    <TableCell align="right">{row.jenisKelamin}</TableCell>
                    <TableCell align="right">{row.umur}</TableCell>
                    <TableCell align="right">{row.keadaan}</TableCell>
                    <TableCell align="right">{row.alamat}</TableCell>
                    <TableCell align="right">{user.name}</TableCell>
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
          count={allPengungsi.length > 0 && allPengungsi.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Fragment>
  );
}

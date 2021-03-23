import React, { Fragment } from "react";
import moment from "moment";
import {
  Paper,
  TablePagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
// import { DataGrid } from "@material-ui/data-grid";

export default function TabelAkunPengungsi({ allAccounts }) {
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
    Math.min(rowsPerPage, allAccounts.length - page * rowsPerPage);

  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                {allAccounts[0].session === "pos" ? "User Name" : "Email"}
              </TableCell>
              <TableCell align="right">
                {allAccounts[0].session === "pos" ? "Nama Pos" : "Nama Petugas"}
              </TableCell>
              <TableCell align="right">Jabatan / Posisi</TableCell>
              <TableCell align="right">Tanggal Registrasi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allAccounts.length > 0 &&
              allAccounts
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index}>
                    {allAccounts[0].session === "pos" ? (
                      <TableCell component="th" scope="row">
                        {row.usernameposko}
                      </TableCell>
                    ) : (
                      <TableCell component="th" scope="row">
                        {row.email}
                      </TableCell>
                    )}

                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.position}</TableCell>
                    <TableCell align="right">
                      {moment(row.date).format("DD MMM YY")}
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
          count={allAccounts.length > 0 && allAccounts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Fragment>
  );
}

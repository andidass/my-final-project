import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  IconButton,
  TablePagination,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

export default function TabelPetugas({ rows, onDelete }) {
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
    <div className="tabel-petugas">
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        color="primary"
        size="small"
        style={{ marginBottom: 8 }}
      >
        <Link style={{ color: "white" }} to="/pos/data-pos/data-petugas">
          Tambah Petugas / Volunteer
        </Link>
      </Button>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nama Petugas / Relawan</TableCell>
              <TableCell align="left">Tugas</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.tambahanPetugas}
                  </TableCell>
                  <TableCell align="left">{row.jabatan2}</TableCell>
                  <TableCell align="center">
                    <IconButton
                      variant="contained"
                      color="secondary"
                      onClick={() => onDelete(row._id)} // memanggil fungsi dan mengambil index (utk lakukan delete item)
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
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

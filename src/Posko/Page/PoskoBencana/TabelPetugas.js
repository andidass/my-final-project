import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export default function TabelPetugas({ allPetugas, onDelete }) {
  return (
    <TableContainer component={Paper} className="tabel-petugas">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nama Petugas / Relawan</TableCell>
            <TableCell align="left">Tugas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allPetugas.map((row, index) => (
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
                  // onClick={() => props.deleteItem(index)} // memanggil fungsi dan mengambil index (utk lakukan delete item)
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

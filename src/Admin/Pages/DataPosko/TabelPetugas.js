import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function TabelPetugas({ allPetugas }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nama Petugas / Relawan</TableCell>
            <TableCell align="left">Tugas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allPetugas &&
            allPetugas.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.tambahanPetugas}
                </TableCell>
                <TableCell align="left">{row.jabatan2}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

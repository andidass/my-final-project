import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function TabelPengungsi({ allPengungsi, user }) {
  return (
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
          {allPengungsi &&
            allPengungsi.map((row, index) => (
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
        </TableBody>
      </Table>
    </TableContainer>
  );
}

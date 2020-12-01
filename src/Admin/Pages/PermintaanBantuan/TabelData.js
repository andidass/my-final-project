import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function TabelData({ allData }) {
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
          {allData &&
            allData.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.namaBarang}
                </TableCell>
                <TableCell align="left">{row.satuan}</TableCell>
                <TableCell align="left">{row.banyaknya}</TableCell>
                <TableCell align="left">{row.jenisBantuan}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

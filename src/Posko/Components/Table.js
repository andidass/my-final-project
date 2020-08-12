import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { useState } from "react";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// function createData(namaBarang, satuan, banyaknya, jenisBantuan) {
//   return { namaBarang, satuan, banyaknya, jenisBantuan };
// }

// const rows = [
//   createData("Beras", "kg", 1000, "Utama"),
//   // createData("Air Mineral", "Dus 360ml", 100, "Utama"),
// ];

export default function SimpleTable() {
  const [rows2, setData] = useState([
    {
      namaBarang: "Beras",
      satuan: "kg",
      banyaknya: "1000",
      jenisBantuan: "Utama",
    },
  ]);
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nama Barang</TableCell>
              <TableCell align="right">Satuan</TableCell>
              <TableCell align="right">Banyaknya</TableCell>
              <TableCell align="right">Jenis Bantuan</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.namaBarang}>
                <TableCell component="th" scope="row">
                  {row.namaBarang}
                </TableCell>
                <TableCell align="right">{row.satuan}</TableCell>
                <TableCell align="right">{row.banyaknya}</TableCell>
                <TableCell align="right">{row.jenisBantuan}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h1>asd</h1> */}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nama Barang</TableCell>
              <TableCell align="right">Satuan</TableCell>
              <TableCell align="right">Banyaknya</TableCell>
              <TableCell align="right">Jenis Bantuan</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows2.map((row2) => (
              <TableRow key={row2.namaBarang}>
                <TableCell component="th" scope="row">
                  {row2.namaBarang}
                </TableCell>
                <TableCell align="right">{row2.satuan}</TableCell>
                <TableCell align="right">{row2.banyaknya}</TableCell>
                <TableCell align="right">{row2.jenisBantuan}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}

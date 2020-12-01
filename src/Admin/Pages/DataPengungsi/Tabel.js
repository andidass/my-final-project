import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./DataPengungsi.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable({ pengungsi, user }) {
  const classes = useStyles();
  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
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
            {pengungsi &&
              pengungsi.map((data, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {data.namaPengungsi}
                  </TableCell>
                  <TableCell align="right">{data.jenisKelamin}</TableCell>
                  <TableCell align="right">{data.umur}</TableCell>
                  <TableCell align="right">{data.keadaan}</TableCell>
                  <TableCell align="right">{data.alamat}</TableCell>
                  <TableCell align="right">{user.name}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

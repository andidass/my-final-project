import React from "react";
import { Button, Box, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import "./DataBantuan.css";

export default function SimpleTable({ dataBantuanUtama, deleteItem }) {
  return (
    <div className="tabel">
      <Typography component="div">
        <Box fontWeight="fontWeightBold" textAlign="center" fontSize={18}>
          Daftar Data Bantuan Utama
        </Box>
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nama Barang</TableCell>
              <TableCell align="right">Jenis Barang</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataBantuanUtama &&
              dataBantuanUtama.map((data, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {data.namaBarang}
                  </TableCell>
                  <TableCell align="right">{data.jenisBantuan}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      onClick={() => deleteItem(data._id)} // memanggil fungsi dan mengambil index (utk lakukan delete item)
                    >
                      <DeleteIcon fontSize="small" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

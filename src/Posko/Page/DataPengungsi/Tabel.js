import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Box, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable({ allPengungsi, deleteItem }) {
  const classes = useStyles();
  return (
    <form>
      <Typography component="div">
        <Box
          fontWeight="fontWeightBold"
          textAlign="center"
          fontSize={18}
          marginTop={5}
        >
          Daftar Pengungsi
        </Box>
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nama Pengungsi</TableCell>
              <TableCell align="right">Jenis Kelamin</TableCell>
              <TableCell align="right">Umur</TableCell>
              <TableCell align="right">Keadaan</TableCell>
              <TableCell align="right">Alamat</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allPengungsi &&
              allPengungsi.map((data, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {data.namaPengungsi}
                  </TableCell>
                  <TableCell align="right">{data.jenisKelamin}</TableCell>
                  <TableCell align="right">{data.umur}</TableCell>
                  <TableCell align="right">{data.keadaan}</TableCell>
                  <TableCell align="right">{data.alamat}</TableCell>
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
    </form>
  );
}

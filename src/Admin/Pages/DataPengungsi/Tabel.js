import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TabelItem from "./TabelItem";
import { TableContainer, TablePagination } from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./DataPengungsi.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const SimpleTable = ({
  pengungsi: { semuaPengungsi, loading },
  kataPencarian,
}) => {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  let data1 = 0;

  // const emptyRows =
  //   rowsPerPage - Math.min(rowsPerPage, data1 - page * rowsPerPage);
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
              <TableCell align="right">Pos</TableCell>
            </TableRow>
          </TableHead>
          {semuaPengungsi.map((data) => (
            <TabelItem
              rows={data.allPengungsi}
              user={data.user}
              kataPencarian={kataPencarian}
              page={page}
              rowsPerPage={rowsPerPage}
            />
          ))}
          {/* {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )} */}
        </Table>

        {/* {semuaPengungsi.map(
          (data) => (data1 = data.allPengungsi.length + data1)
        )} */}

        {/* {console.log(data1)} */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data1}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pengungsi: state.pengungsi,
});

export default connect(mapStateToProps)(SimpleTable);

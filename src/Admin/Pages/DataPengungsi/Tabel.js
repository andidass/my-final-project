import React from "react";
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

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
          {semuaPengungsi.map((data) => (
            <TabelItem
              rows={data.allPengungsi}
              user={data.user}
              kataPencarian={kataPencarian}
              page={page}
              rowsPerPage={rowsPerPage}
            />
          ))}
        </Table>

        {/* {semuaPengungsi.map((data)=> var data1 = data.allPengungsi.length; var allData=allData + data1)} */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={2}
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

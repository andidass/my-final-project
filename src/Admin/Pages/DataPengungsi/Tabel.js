import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TabelItem from "./TabelItem";
import TableContainer from "@material-ui/core/TableContainer";
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
              pengungsi={data.allPengungsi}
              user={data.user}
              kataPencarian={kataPencarian}
            />
          ))}
        </Table>
      </TableContainer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pengungsi: state.pengungsi,
});

export default connect(mapStateToProps)(SimpleTable);

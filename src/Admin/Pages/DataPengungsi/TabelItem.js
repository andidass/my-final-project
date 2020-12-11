import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { TableBody } from "@material-ui/core";

const TabelItem = ({ rows, user, kataPencarian, page, rowsPerPage }) => {
  // const emptyRows =
  //   rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const filteredData = rows.filter((data) => {
    return (
      data.namaPengungsi.toLowerCase().indexOf(kataPencarian.toLowerCase()) !==
      -1
    );
  });
  return (
    <Fragment>
      <TableBody>
        {rows &&
          filteredData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
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
        {/* {emptyRows > 0 && (
          <TableRow style={{ height: 53 * emptyRows }}>
            <TableCell colSpan={6} />
          </TableRow>
        )} */}
      </TableBody>
    </Fragment>
  );
};

export default TabelItem;

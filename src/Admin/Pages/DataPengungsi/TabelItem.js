import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { TableBody } from "@material-ui/core";

const TabelItem = ({ pengungsi, user, kataPencarian }) => {
  const filteredData = pengungsi.filter((data) => {
    return (
      data.namaPengungsi.toLowerCase().indexOf(kataPencarian.toLowerCase()) !==
      -1
    );
  });
  return (
    <TableBody>
      {pengungsi &&
        filteredData.map((data, index) => (
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
  );
};

export default TabelItem;

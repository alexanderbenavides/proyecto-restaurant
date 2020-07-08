import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import restData from "../../../api/restaurant";

const restaurantData = [];
restaurantData.push(restData[0]);

export default function SimpleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Imagen</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Dirección</TableCell>
            <TableCell align="right">País</TableCell>
            <TableCell align="right">Ciudad</TableCell>
            <TableCell align="right">Código postal</TableCell>
            <TableCell align="right">Categoría</TableCell>
            <TableCell align="right">Rating</TableCell>
            <TableCell align="right">Comentarios</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurantData.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                <img
                  style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                  src={row.imageSrc}
                  alt="not iamge"
                ></img>
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.country}</TableCell>
              <TableCell align="right">{row.state}</TableCell>
              <TableCell align="right">{row.zipCode}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.rating}</TableCell>
              <TableCell align="right">{row.reviewCount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

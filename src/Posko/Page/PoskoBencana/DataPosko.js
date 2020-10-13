import React, { Fragment } from "react";

import { Typography, TextField, Box } from "@material-ui/core";

const DataPosko = () => {
  return (
    <form className="body-posko-bencana">
      <Typography component="div">
        <Box fontSize={17}>Data Posko</Box>
      </Typography>
      <TextField
        id="namaPosko"
        label="Nama Posko"
        style={{ margin: 8, maxWidth: 500 }}
        margin="normal"
        variant="outlined"
        size="small"
        fullWidth
        // value=""
      />
      <TextField
        id="alamatPosko"
        label="Alamat Posko"
        style={{ margin: 8, maxWidth: 500 }}
        margin="normal"
        variant="outlined"
        size="small"
        fullWidth
        multiline
        // value=""
      />

      <TextField
        id="desaPosko"
        label="Desa"
        style={{ margin: 8, maxWidth: 500 }}
        margin="normal"
        variant="outlined"
        size="small"
        fullWidth
        multiline
        // value=""
      />
      <TextField
        id="dusunPosko"
        label="Dusun"
        style={{ margin: 8, maxWidth: 500 }}
        margin="normal"
        variant="outlined"
        size="small"
        fullWidth
        // value=""
      />
      <TextField
        id="lokasiPosko"
        label="Lokasi Posko"
        style={{ margin: 8, maxWidth: 500 }}
        margin="normal"
        variant="outlined"
        size="small"
        fullWidth
        // value=""
      />
    </form>
  );
};

export default DataPosko;

import React, { useState } from "react";

import { Typography, TextField, Box } from "@material-ui/core";

const DataPosko = () => {
  const [profileData, setProfileData] = useState({
    namaPosko: "",
    alamatPosko: "",
    dusunPosko: "",
    desaPosko: "",
    kecPosko: "",
    kabPosko: "",
  });

  const {
    namaPosko,
    alamatPosko,
    dusunPosko,
    desaPosko,
    kecPosko,
    kabPosko,
  } = profileData;

  const onChange = (e) =>
    setProfileData({ ...profileData, [e.target.name]: e.target.value });

  return (
    <form className="body-posko-bencana">
      <Typography component="div">
        <Box fontSize={17}>Data Posko</Box>
      </Typography>
      <TextField
        name="namaPosko"
        label="Nama Posko"
        style={{ margin: 8, maxWidth: 500 }}
        margin="normal"
        variant="outlined"
        size="small"
        fullWidth
        onChange={(e) => onChange(e)}
        value={namaPosko}
      />
      <TextField
        name="alamatPosko"
        label="Alamat Posko"
        style={{ margin: 8, maxWidth: 500 }}
        margin="normal"
        variant="outlined"
        size="small"
        fullWidth
        multiline
        onChange={(e) => onChange(e)}
        value={alamatPosko}
      />

      <TextField
        name="dusunPosko"
        label="Dusun"
        style={{ margin: 8, maxWidth: 500 }}
        margin="normal"
        variant="outlined"
        size="small"
        fullWidth
        onChange={(e) => onChange(e)}
        value={dusunPosko}
      />
      <TextField
        name="desaPosko"
        label="Desa"
        style={{ margin: 8, maxWidth: 500 }}
        margin="normal"
        variant="outlined"
        size="small"
        fullWidth
        onChange={(e) => onChange(e)}
        value={desaPosko}
      />
      <TextField
        name="kecPosko"
        label="Kecamatan"
        style={{ margin: 8, maxWidth: 500 }}
        margin="normal"
        variant="outlined"
        size="small"
        fullWidth
        onChange={(e) => onChange(e)}
        value={kecPosko}
      />
      <TextField
        name="kabPosko"
        label="Kabupaten"
        style={{ margin: 8, maxWidth: 500 }}
        margin="normal"
        variant="outlined"
        size="small"
        fullWidth
        onChange={(e) => onChange(e)}
        value={kabPosko}
      />
    </form>
  );
};

export default DataPosko;

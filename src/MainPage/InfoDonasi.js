import React, { Fragment } from "react";
import { Grid, Card, CardContent, Typography, Box } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PaymentIcon from "@material-ui/icons/Payment";

export default function InfoDonasi() {
  return (
    <Fragment>
      <Grid container>
        <Grid item item xs={12} sm={6}>
          <Card
            variant="outlined"
            style={{ width: `92%`, height: `92%`, margin: `4%` }}
          >
            <CardContent>
              <Typography component="div">
                <Box>
                  <b>Posko Penanganan Darurat Bencana Gempa Lombok</b>
                </Box>
                <Box>
                  Lap. Supersemar Tanjung - Jl. Raya Tanjung Depan Kantor Bupati
                  Lombok Utara
                </Box>
                <br />
                <Box>
                  <b>Nomor Rekening Donasi</b>
                </Box>
                <Box style={{ display: "flex" }}>
                  <PaymentIcon /> &nbsp;<b>BRI</b> &nbsp; 0052-01-002421-30-8
                  (Posko PDB Lombok)
                </Box>
              </Typography>
              <br />
              <Typography component="div">
                <Box>
                  <b>Nomor Penting :</b>
                </Box>
                <Box>
                  POSKO Penanganan Darurat: 0853 3863 9789 / 0859 6147 2837
                </Box>
                <Box>SAR Mataram: (0370) 533253</Box>
                <Box>Pemadam Kebakaran: (0370) 6662113</Box>
                <Box>PLN NTB: (0370) 123 / 08123758123</Box>
                <Box>RSU Kota Mataram: (0370) 640774</Box>
                <Box>RSUP NTB: (0370) 623876</Box>
                <Box>RS Risa Mataram: (0370) 625560</Box>
                <Box>RS Biomedika Mataram: (0370) 645137</Box>
                <Box>RSU Praya: (0370) 654007</Box>
                <Box>RS Dr. Soedjono Selong, Lombok Timur : (0376) 21118</Box>
                <Box>RS Risa Sentra Medika Lombok Timur: (0376) 23888</Box>
                <Box>Puskesmas Tanjung, Lombok Utara: (0370) 623010</Box>
                <Box style={{ display: "flex" }}>
                  <TwitterIcon /> poskogempalomb1
                </Box>
                <Box style={{ display: "flex" }}>
                  <FacebookIcon /> posko.lombok
                </Box>
                <Box style={{ display: "flex" }}>
                  <InstagramIcon /> poskogempalombok
                </Box>
                <Box style={{ display: "flex" }}>
                  <WhatsAppIcon /> 085961472837
                </Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item item xs={12} sm={6}>
          <img
            style={{ height: `70vh`, width: `100%`, objectFit: "cover" }}
            src="/img/charity.svg"
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}

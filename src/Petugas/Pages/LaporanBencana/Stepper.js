import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import KejadianBencana from "./KejadianBencana";
import KorbanJiwa from "./KorbanJiwa";
import Typography from "@material-ui/core/Typography";
import "./style.css";
//! BELUM DIGUNAKAN

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Kejadian Bencana",
    "Korban Jiwa",
    "Kerusakan",
    "Fasilitas Umum & Upaya Penanganan",
  ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <KejadianBencana />;
    case 1:
      return <KorbanJiwa />;
    case 2:
      return "This is the bit I really care about!";
    case 3:
      return "This is the bit I really care about!";
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSaveData = () => {
    // call function sumbit all data here
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              Semua Data Complite
            </Typography>
            <Button onClick={handleSaveData}>Lihat Data</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div className="button">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="outlined"
                className={classes.backButton}
              >
                Kembali
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Selesai" : "Selanjutnya"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

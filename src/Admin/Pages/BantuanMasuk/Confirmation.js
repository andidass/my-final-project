import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Modal, Backdrop, Fade } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    textAlign: "center",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({
  sumbitConfirmation,
  submitHandler,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    submitHandler();
  };

  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const confirmationHandler = (e) => {
    e.preventDefault();
    console.log("Klik confirmation");
    sumbitConfirmation();
    setOpen(false);
  };

  return (
    <Fragment>
      <Button
        variant="contained"
        color="primary"
        style={{ margin: 8 }}
        onClick={handleOpen}
        startIcon={<SaveIcon />}
      >
        Simpan
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        disableBackdropClick
        // onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Konfirmasi</h2>
            <p id="transition-modal-description">
              Apakah anda yakin untuk menyimpan data?
            </p>
            <Button onClick={(e) => confirmationHandler(e)}>Ya</Button>
            <Button onClick={(e) => handleClose(e)}>Batal</Button>
          </div>
        </Fade>
      </Modal>
    </Fragment>
  );
}

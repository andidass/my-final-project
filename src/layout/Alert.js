import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Alert as AlertBanner } from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id}>
      <Snackbar open={true} autoHideDuration={1000}>
        <AlertBanner variant="filled" severity={alert.alertType}>
          {alert.msg}
        </AlertBanner>
      </Snackbar>
    </div>
  ));

Alert.PropTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);

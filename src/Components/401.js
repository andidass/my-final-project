import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Warning = ({ auth: { user } }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("kembali...");
    // <Redirect to={`/${user && user.session}/dashboard`} />;
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Anda Tidak Diizinkan Mengakses Halaman Ini</h2>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ margin: 8 }}
        onClick={(e) => handleClick(e)}
      >
        <Link to={`/main-page`} style={{ color: "white" }}>
          Kembali
        </Link>
      </Button>
      <br />
      <img
        src="/img/warning.svg"
        alt="React Logo"
        style={{ width: `40%`, marginTop: 100 }}
      />
    </div>
  );
};

Warning.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Warning);

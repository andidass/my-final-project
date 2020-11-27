import React, { Fragment } from "react";
// import { Link } from "react-router-dom";

import "./LoginCoba.css";
import "./bootstrap.min.css";
import "./fontawesome-all.min.css";
import "./iofrm-style.css";
// import './iofrm-theme3.css'

const LoginCoba = () => {
  return (
    <Fragment>
      <div className="form-body" className="container-fluid">
        <div className="website-logo">
          <div className="logo">
            <img
              className="logo-size"
              src="https://pbs.twimg.com/profile_images/941801711827533825/iIDRvwuw.jpg"
              alt=""
            ></img>
          </div>
        </div>
        <div className="row">
          <div className="img-holder">
            <div className="bg"></div>
            <div className="info-holder"></div>
          </div>
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h3>Get more things done with Loggin platform.</h3>
                <p>
                  Access to the most powerfull tool in the entire design and web
                  industry.
                </p>
                <div className="page-links">
                  <a href="login3.html" className="active">
                    Login
                  </a>
                  <a href="register3.html">Register</a>
                </div>
                <form>
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    placeholder="E-mail Address"
                    required
                  ></input>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  ></input>
                  <div className="form-button">
                    <button id="submit" type="submit" className="ibtn">
                      Login
                    </button>
                  </div>
                </form>
                {/* <div className="other-links">
                  <span>Or login with</span>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-google"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginCoba;

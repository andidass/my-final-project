import React from "react";
import "./MainPosko.css";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import MenuBar from "../Components/MenuBar";
import MenuPosko from "../Components/MenuPosko";

import { Typography } from "@material-ui/core";

function MainPosko() {
  return (
    <div>
      <Header />
      <MenuBar />
      <Typography
        align="center"
        variant="p"
        component="h3"
        className="title-posko"
      >
        Posko 1 Desa A
      </Typography>
      <MenuPosko />
      <Footer />
    </div>
  );
}

export default MainPosko;

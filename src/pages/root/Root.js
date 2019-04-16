import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Routes } from "../../Routes";

export const Root = () => (
  <React.Fragment>
    <Header />
    <Routes />
    {/* <h1>It worked!</h1> */}
    <Footer />
  </React.Fragment>
);

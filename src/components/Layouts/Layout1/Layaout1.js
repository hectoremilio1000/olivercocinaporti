import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layaout1 = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layaout1;

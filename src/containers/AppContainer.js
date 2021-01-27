import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";

const AppContainer = ({ children }) => {
  return (
    <div className="App">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default AppContainer;

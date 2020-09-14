import React, { useEffect } from "react";
import "./index.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import myimg from "../src/images/NewBaner.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-sine" });
  }, []);
  return (
    <>
      <header>
        <div className="container-fluid w-100 mt-5 shadow-lg ">
          <img className="img-fluid" src={myimg} data-Aos="fade-left" />
        </div>
      </header>
    </>
  );
};
export default Header;

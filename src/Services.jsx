import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";

import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { NavLink } from "react-router-dom";
import Sdata from "./Sdata";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "@material-ui/core/Button";

function Services() {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-sine" });
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto bg-dark text-light">
            <h2 className="text-center" style={{ fontFamily: "caveeat" }}>
              My Services
            </h2>
            <p
              className=" text-light text-center"
              style={{ fontFamily: "caveeat" }}
            >
              I design broad variety of designs which your business need to
              grow, at resonable prices, I have industrial experience as well as
              good understanding of business branding.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-10 mx-auto bg-light">
            <div className="row gy-4">
              {Sdata.map((v, i) => {
                return (
                  <Card
                    key={i}
                    imgsrc={v.img}
                    ctitle={v.title}
                    ctext={v.text}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="bottomSection">
        <div className="container mt-5 ">
          <div className="row">
            <div className="col-6 mt-4 bg-success my-auto">
              <h3
                className="text-center text-light"
                style={{ fontFamily: "caveeat" }}
              >
                If your need any of service
              </h3>
            </div>

            <div className="col-6 mt-4 bg-dark text-center d-flex justify-content-center align-items-center">
              <NavLink exact to="/contact" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  className="btn  bg-success text-white"
                >
                  Contact me
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;

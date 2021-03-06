import React, { useEffect } from "react";
import "./index.css";
import Navbar from "./Navbar";
import web from "../src/images/myimg.jpg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import myimg from "../src/images/myimg.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import Aos from "aos";
import "aos/dist/aos.css";
const Card = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-sine" });
  }, []);
  return (
    <>
      <div className="col-md-4 col-10 mx-auto bg-light">
        <div
          className="card mt-3 shadow"
          data-Aos="fade-left"
          style={{
            borderRadius: 45,
            boxShadow: 39,
            
            
          }}
        >
          <img
            src={props.imgsrc}
            className="card-img-top img-fluid"
            
            alt="..."
            data-Aos="zoom-in"
          />
          <div className="card-body bg-light">
            <h5 className="card-title">{props.ctitle}</h5>
            <p
              className="card-text text-left"
              style={{ fontFamily: "caveeat" }}
            >
              {props.ctext}
            </p>
            <NavLink to="./" className="btn btn-light">
              Know
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;

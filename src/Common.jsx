import React from "react";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <div className="container mt-4  shadow" data-Aos="fade-right">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 order-1 order-lg-1 mt-lg-5 mt-1 d-flex flex-column justify-content-center ">
                <h1>
                  <strong className="text-danger font-weight-bolder">
                    {props.home}
                  </strong>
                </h1>

                <h2 className="my-3">{props.homeslogan}</h2>

                <p>
                  We are providing services regarding Graphics
                  designs,Portfolios,and Promotional marketing ,Social media
                  Marketing ,Branding products, Visiting Card ,Logo design and
                  many more. Contact for your requriement.
                </p>
                <div className="mt-2">
                  <NavLink
                    to="/services"
                    className="btn get-started mt-0"
                    style={{
                      backgroundColor: "teal",
                      color: "white",
                      borderRadius: 39,
                    }}
                  >
                    {props.btn}
                  </NavLink>
                </div>
              </div>
              <div
                className="col-lg-6 order-sm-1 header-img mt-lg-4  mt-1 d-flex justify-content-center align-items-center"
                data-Aos="fade-left"
              >
                <figure>
                  <img
                    src={props.myimg}
                    alt="pavan"
                    className="img-fluid "
                    data-Aos="zoom-in"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Common;

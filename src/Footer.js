import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import Aos from "aos";
import "aos/dist/aos.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-sine" });
  }, []);
  return (
    <>
      <footer className="myfooter">
        <div
          className="container-fluid shadow-lg mt-5 bg-info"
          data-Aos="zoom-in"
        >
          <div className="row">
            <div className="col-12  mt-2 d-flex justify-content-center align-items-center flex-column">
              <h2
                className="text-center text-dark"
                style={{ fontFamily: "caveeat" }}
              >
                Get in Touch With Me
              </h2>
              <div className="content">
                <p
                  className="text-center text-light "
                  style={{ fontFamily: "caveeat", Opacity: "0.8" }}
                >
                  Graphic design is one of the most demanding service in today's
                  <br />
                  market businesses run over advertisements which we deliver to
                  your business with great proficiency.
                </p>
              </div>
            </div>

            <div className="col-12 d-flex justify-content-center align-items-center mb-3 ">
              <div
                className="btn-group bg-light d-flex justify-content-around "
                role="group"
                aria-label="Basic example"
                style={{borderRadius:28}}

              >
                <Button
                  href="https://www.facebook.com/pg/bhagyshreegraphicsdesigan-104914981141686/photos/"
                  target="_blank"
                  className="text-dark"
                >
                  <FacebookIcon style={{ color: "#3b5998" }} />
                  Facebook
                </Button>

                <Button
                  href="https://www.instagram.com/bhagyshreegraphicsdesigan?r=nametag"
                  target="_blank"
                  className="text-dark"
                >
                  <InstagramIcon style={{ color: "red" }} />
                  Instagram
                </Button>
                <Button
                  href="https://mail.google.com/mail/u/0/"
                  target="_blank"
                  className="text-dark"
                >
                  <EmailIcon style={{ color: "black" }} />
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;

import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Aos from "aos";
import "aos/dist/aos.css";
import * as emailjs from "emailjs-com";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-sine" });
  }, []);

  const [data, setData] = useState({
    fname: "",
    lname: "",
  });
  const handleEvent = (event) => {
    const { name, value } = event.target;
    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const fillForm = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_7o97jsy",
        "#myform",
        "user_FG5ClqPHfPcQ3PT00smjp"
      )
      .then(() => {
        console.log("succed");
        alert("Your message have been sent");
      })
      .catch(() => {
        console.log("error");
        alert("There is an error please try again later");
      });
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto ">
            <h2 style={{ fontFamily: "caveeat" }} className="text-center">
              Contact me
            </h2>
          </div>
        </div>
      </div>
      <p

              className="text-center bg-light font-smaller"

              data-Aos="zoom-in"

            >

              For more info

              <br />

              <WhatsAppIcon style={{ color: "green" }} fontSize="larger" />

              9977447884

            </p>
      <div className="container formContainer">
        <div className="row">
          <div className="col-12 mt-3 d-flex justify-content-center align-items-center flex-column">
            <form
              id="myform"
              onSubmit={fillForm}
              className=" p-2 w-50 h-100"
              data-Aos="zoom-in"
            >
              <div className="form-group">
                <label for="exampleInputEmail1">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={data.fname}
                  onChange={handleEvent}
                  name="fname"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">
                  which service do you need
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={data.lname}
                  onChange={handleEvent}
                  name="lname"
                />
              </div>
              <button type="submit" className="btn btn-success mt-2">
                Submit
              </button>
            </form>
            <h4 className="text-center mt-4">Thanks for visiting</h4>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

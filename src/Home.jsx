import React, { useEffect } from "react";
import "./index.css";
import Navbar from "./Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import myimg from "../src/images/Pavannew.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import Common from "./Common";
import Header from "./Header";
import Footer from "./Footer";
function Home() {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <>
      <Navbar />

      <Header />

      <Common
        home={"Hey I am Pavan"}
        homeslogan={"I convert your Ideas into designs."}
        myimg={myimg}
        btn={"Get Started"}
      />
      <Footer />
    </>
  );
}

export default Home;

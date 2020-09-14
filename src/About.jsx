import React from 'react';
import './App.css';
import Navbar from './Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Common from './Common';
import myimg2 from '../src/images/myimg2.jpg'

function About() {
  return (
        <>
          <Navbar/>
          <Common
              home={"Welcome to About Us Page"}
              homeslogan={"Our team helps you in growing your business "}
              myimg={myimg2}
              btn={"AboutUS"}
          />
        
        </>

  );
}

export default About;

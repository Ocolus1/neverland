import React, { useState,  useEffect } from 'react';
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import { Button } from "react-bootstrap"
import "./App.css"
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import SectionFive from './components/SectionFive';
import { css } from "@emotion/react";
import BounceLoader from "react-spinners/BounceLoader";
import { Media } from 'react-breakpoints'

const App = () => {
  const [loading, setLoading] = useState(true);
  const [background, setBackground] = useState("sec_one_div");

  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    setTimeout(() => {
      setBackground("sec_one_div2");
    }, 70000);
  }, []);

  const override = css`
    display: block;
    position: absolute;
    top: 40%;
    left: 45%;
    margin:  auto;
    border-color: red;
  `;

  const linearBtn = (text, link) => {
    return (
      <Button style={{
        color: "#000000",
        background: "linear-gradient(95.54deg, #00FF96 6.9%, #007E4A 97%)",
        borderRadius: "10px",
        flexDirection: "row",
        alignItems: "flex-start",
        padding: "10px 20px",
        border: "none",
      }} href={link}>{text}</Button>
    )
  }


 
  return (loading ?
    <Media>
        {({ breakpoints, currentBreakpoint }) =>
          breakpoints[currentBreakpoint] > breakpoints.tablet ? (
            // If page is still loading then splash screen
            <BounceLoader color={'#36D7B7'} isLoading={loading}
            css={override} size={150} />
          ) : (
            // If page is still loading then splash screen
            <BounceLoader color={'#36D7B7'} isLoading={loading}
            css={override} size={50} />
          )
        }
      </Media>
     :
    <>

      <div className={background}>
        <Navigation linearBtn={linearBtn} />
        <Hero linearBtn={linearBtn} />
      </div>
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </>
  );
}

export default App;
import React from 'react';
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import  { Button} from "react-bootstrap"
import "./App.css"
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import SectionFive from './components/SectionFive';

const App = () => {

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

  return ( 
    <>
      <div className='sec_one_div'>
        <Navigation linearBtn={linearBtn}/>
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
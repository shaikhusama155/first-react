import { Button } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import Navbar from "./component/Navbar";
import About from "./component/About";
// import TextForm from "./component/TextForm";

function App() {
  return (
    <>
    <Navbar/>
    <br/>
    <br/>
    {/* <TextForm heading="Enter the text to Analyze below"/>  */}
 <About/>
    </>
  );
}

export default App;

import { Button } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";

function App() {
  return (
    <>
    <Navbar/>
    <br/>
    <br/>
  <div className="container">
    <TextForm heading="Enter the text to Analyze below"/> 
  </div>
    </>
  );
}

export default App;

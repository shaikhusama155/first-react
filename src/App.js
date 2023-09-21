import { Button } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import Navbar from "./component/Navbar";
// import About from "./component/About";
import TextForm from "./component/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white"
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <br />
      <br />
      <TextForm mode={mode} heading="Enter the text to Analyze below" />
      {/* <About/> */}
    </>
  );
}

export default App;

// import { Button } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import Navbar from "./component/Navbar";
import About from "./component/About";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
import React from "react";
import { BrowserRouter, Routes, Route,NavLink, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const removeClass = ()=>{
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-success")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-dark")
  }
  const toggleMode = (cls) => {
    removeClass()
    console.log(cls)
    document.body.classList.add("bg-"+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#002c58";
      showAlert(" has been Enable", cls);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" has been Enable", cls);
    }
  };
  const darkMode = () => {
    removeClass()
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#002c58";
      showAlert("Dark Mode has been Enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enable", "success");
    }
  };

  return (
    <BrowserRouter>
    <>
      <Navbar mode={mode} toggleMode={toggleMode} darkMode={darkMode} />
      <Alert alert={alert} />
      <br />
      <br />
      <div className="container">
        <Routes>
          <Route path="/" element={<TextForm
              showAlert={showAlert}
              mode={mode}
              heading=" Try TextUtils - Word Counter, Character Counter, Romove Extra Spaces"
            />}/>
          <Route path="/about" element ={<About mode={mode} />}/>        
        </Routes>
      </div>
    </>
      </BrowserRouter>
  );
}

export default App;

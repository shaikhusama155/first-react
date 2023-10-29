import { orange } from "@mui/material/colors";
import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text han been Capitilize", "success")
  };
  // const capital = () => {
  //   let newTextArray = [];
  
  //   for (let i = 0; i < text.length; i++) {
  //     let newText = text[i].charAt(0).toUpperCase() + text[i].slice(1).toLowerCase();
  //     newTextArray.push(newText);
  //   }
  
  //   setText(newTextArray);
  //   props.showAlert("Text has been Capitalized", "success");
  // };
  
  
  const handleOlClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been LowerCase", "success")
  };
  const handleOlClear = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text has been Cleared", "success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy =()=>{
    let text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value)
    document.getSelection().removeAllRanges()
    props.showAlert("Text has been Copy", "success")
  }
  const handleExtraSpace = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
    props.showAlert("Removed all the Extra Space From Box", "success")

  };
  return (
    <>
      <div className="container" style={{color:props.mode=== "dark"?"white":"#002c58"}}>
        <h2 style={{fontWeight: 900,fontFamily: "Lucida Console"}}>{props.heading}</h2>
        <div className="mb-3">
          <textarea style={{backgroundColor:props.mode=== "dark"?"#13455e":"white",color:props.mode=== "dark"?"white":"#002c58" }}
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleOnClick}>
          Convert to UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleOlClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
        <button disabled={text.length===0} className="btn btn-primary m-2  " onClick={handleOlClear}>
          Clear
        </button>
      </div>
      <div className="container" style={{color:props.mode=== "dark"?"white":"#002c58"}}>
        <h2 style={{ fontFamily: "Lucida Console"}} className="m-7">Your Text Summery</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length}  minutes Read</p>
        <h2 style={{ fontFamily: "Lucida Console"}}>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
      </div>
    </>
  );
}

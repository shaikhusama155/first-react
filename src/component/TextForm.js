import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text han been Capitilize", "success")
  };
  const handleOlClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text han been LowerCase", "success")
  };
  const handleOlClear = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text han been Cleared", "success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy =()=>{
    let text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text han been Copy", "success")
  }
  const handleExtraSpace = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
    props.showAlert("Removed all the Extra Space From Box", "success")

  };
  return (
    <>
      <div className="container" style={{color:props.mode=== "dark"?"white":"#002c58"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea style={{backgroundColor:props.mode=== "dark"?"#002c58":"white",color:props.mode=== "dark"?"white":"#002c58" }}
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleOnClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary m-2" onClick={handleOlClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary m-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary m-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary m-2" onClick={handleOlClear}>
          Clear
        </button>
      </div>
      <div className="container" style={{color:props.mode=== "dark"?"white":"#002c58"}}>
        <h2 className="m-7">Your Text Summery</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the TextBox above to Preview it here"}</p>
      </div>
    </>
  );
}

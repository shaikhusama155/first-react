import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOlClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOlClear = () => {
    let newText = " ";
    setText(newText);
  };
  const handleReverse = () => {
    let newText = text.reverse();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
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
        <button className="btn btn-primary m-2" onClick={handleOlClear}>
          Clear
        </button>
      </div>
      <div className="container">
        <h2 className="m-7">Your Text Summery</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

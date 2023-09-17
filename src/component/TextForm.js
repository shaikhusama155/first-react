import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter The Text Here");
  const handleOnClick = () => {
    setText(text.toUpperCase());
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="10"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleOnClick}>
        Convert to UpperCase
      </button>
    </div>
  );
}

import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setmyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#002c58",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
  };
  
  return (
    <div className="container">
      <h1 className="my-3" style={ {color: props.mode === "dark" ? "white" : "#002c58"}}>About Us</h1>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              style={myStyle}
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
            Certainly! The provided text outlines a platform called TextUtils, designed for text transformation. It caters to a diverse audience, including writers, coders, and general users. The key features include a variety of text transformations, coding-friendly options, 
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              style={myStyle}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>

            Fantastic! Offering the platform as free to use is a great way to attract a wide user base and encourage exploration of its features. This aligns well with the inclusive and accessible nature outlined in the initial description. Users will likely appreciate the opportunity to access and benefit from the text transformation tools without any cost involved.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              style={myStyle}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
            Great to know that your platform is browser-compatible! Ensuring compatibility across different browsers enhances the accessibility of your text transformation tools. It allows users to seamlessly utilize your platform regardless of their preferred web browser, providing a consistent experience.
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}

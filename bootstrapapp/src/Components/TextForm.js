import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handelClickUp = () => {
    //   console.log("uppercase Was Clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handelClickLw = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handelClickcapital = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
  };
  const handelClickClear = () => {
    setText("");
  };
  const handelonchange = (e) => {
    // console.log("change");
    setText(e.target.value);
  };
  return (
    <>
      <div className="container">
        <h1 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {props.heading}
        </h1>
        <div className="mb-3 ">
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            onChange={handelonchange}
            rows="9"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#000",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary me-3" onClick={handelClickUp}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary me-3" onClick={handelClickLw}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary me-3" onClick={handelClickClear}>
          Clear
        </button>
        <button className="btn btn-primary me-3" onClick={handelClickcapital}>
          Capitalized
        </button>
      </div>
      <div
        className={`container my-5 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1>Your summary</h1>
        <h4>
          Words:- {text.trim() === "" ? 0 : text.trim().split(/\s+/).length}
        </h4>
        <h4>Characters:- {text.length}</h4>
        <h4>minutes reads:- {0.008 * text.split("").length}</h4>
        <h6>{text.length > 0 ? text : "Type Hear........ In Textarea"}</h6>
      </div>
    </>
  );
}

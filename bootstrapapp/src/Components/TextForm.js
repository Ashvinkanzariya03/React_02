import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handelClickUp=()=>{
    //   console.log("uppercase Was Clicked"+text);
      let newText = text.toUpperCase()
      setText(newText)
  }
  const handelClickLw=()=>{
      let newText = text.toLowerCase()
      setText(newText)
  }
  const handelonchange=(e)=>{ 
    // console.log("change");
    setText(e.target.value)
  }
  return (
    <div>
      <h1>{props.heading}</h1> 
      <div className="mb-3">
        <textarea className="form-control" id="mybox" value={text} onChange={handelonchange} rows="9"></textarea>
      </div>
      <button className="btn btn-primary me-3" onClick={handelClickUp}>Convert to uppercase</button>
      <button className="btn btn-primary" onClick={handelClickLw}>Convert to Lowercase</button>
    </div>
  );
}

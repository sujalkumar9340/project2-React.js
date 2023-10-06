import React, { useState } from "react";

export default function TextForm(props) {
  const handleupclick = () => {
    console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleonchange = (event) => {
    console.log("on change");
    //  agar settext yeha nahi kare to hum kuch type nahi kar payenege
    setText(event.target.value);
  };
  // array distructuring se ye concept aaya hai thora differecne hai
  const [text, setText] = useState("Enter text here");
  //   setText("jfhhfodsmk");
  let lowercase=()=>{
    let ty=text.toLowerCase();
    setText(ty)
  }
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div class="mb-3">
        <textarea

        
          className="form-control"
          value={text}
          onChange={handleonchange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>

      <button className="btn btn-primary" onClick={handleupclick}> 
        {" "}
         convert to uppercase
      </button>  
      <button className="btn btn-primary mx-2" onClick={lowercase}> convert it into lowercase</button>
    </div>
    <div className="container my-2">
        <h2>your text summary</h2>
        {/* split wala jo method hai yeha ye array hi return karega chahye  string  ho ya array new array return karega  */}
        <p>{text.split(" ").length} worrds {text.length} character</p>
        {/* ye 0.008 jo hai wo internet se liye hai  1 avrage hotha hai kise word ko padne mai */}
        <p>{0.008*text.split(" ").length}minutes read</p>
    </div>
    <h2>preview</h2>
    {console.log("here is new trail")}
    <p>{text}</p>
    {/* {console.log(ae.json())} */}
    </>
  );
}

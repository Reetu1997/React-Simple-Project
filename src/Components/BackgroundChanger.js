import React from "react";
import './BackgroundChanger.js';

const Background = () =>{
    return(
        <>
        <h1 >BackGround Changer</h1>
        <h2 id='color'>Reetu</h2>
        <input type="color" onChange={(x) => document.getElementById("color").style.color = x.target.value}></input>
      </>
    )
}
export default Background;
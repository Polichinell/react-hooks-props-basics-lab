import React from "react";
import Links from "./Links";

function About(props) {
  let bioEhe;
if (props.bio){
  bioEhe = <p>{props.bio}</p>
}
return  (
    <div id="about">
      <h2>About Me</h2>
      {bioEhe}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
    </div>)
  
}

export default About;

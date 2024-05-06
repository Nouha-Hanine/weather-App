import React, { useState } from "react";
import { useDate } from "./UseDate";
function Greetings() {
  let greeting;
  let username = "Mey"; //recup from database TODO
  let { time } = useDate();
  if (time < 12) {
    greeting = "Good morning";
  } else if (time < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening,";
  }

  return (
    <div className="greeting-container">
      <h1
        style={{
          fontSize: 30,
          marginLeft: 150,
          marginTop: 15,
          padding: 0,
          marginBottom: 0,
        }}
      >
        <style>
          {`
          @media (max-width: 600px) {
            /* Adjust font size for smaller screens */
            h1 {
                display: none;
            }
          }
        `}
        </style>
        {greeting} {username}!
      </h1>
    </div>
  );
}

export default Greetings;
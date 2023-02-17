import React from "react";

import { Text } from "../containers/Language";
import "../App.css";

export default function Explore() {
  return (
    <div className="App">
      <h2>
        <Text tid="mainPageHeader" />
      </h2>
      <p>
        <Text tid="welcomeDescription" />
      </p>
      <br></br>
      <h2>
        <Text tid="title" />
      </h2>
      <p>
        <Text tid="aboutMe" />
      </p>
      <br></br>
      <h2>
        <Text tid="movieName" />
      </h2>
      <p>
        <Text tid="movieDescription" />
      </p>
      <p>
        <Text tid="rating" />
      </p>
    </div>
  );
}

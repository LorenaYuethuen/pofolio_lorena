import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Automated Test Engineer",
          "Computational Neuroscience Researcher",
          "Data Analysis Engineer",
          "BCI & Machine Learning Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Type;

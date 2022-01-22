import * as React from "react";
import Stars from "../assets/stars.png";
import Moon from "../assets/moon.png";
import MountainsBehind from "../assets/mountains_behind.png";
import MountainsFront from "../assets/mountains_front.png";

const Section = () => {
  return (
    <section>
      <img src={Stars} id="stars" alt="" />
      <img src={Moon} id="moon" alt="" />
      <img src={MountainsBehind} id="mountains_behind" alt="" />
      <h2 id="text">Moon Light</h2>
      <a href="/" id="btn">
        Explore
      </a>
      <img src={MountainsFront} id="mountains_front" alt="" />
    </section>
  );
};

export default Section;

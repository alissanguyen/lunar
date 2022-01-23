import * as React from "react";
import Stars from "../assets/stars.png";
import Moon from "../assets/moon.png";
import MountainsBehind from "../assets/mountains_behind.png";
import MountainsFront from "../assets/mountains_front.png";
const Section = () => {
  return (
    <section>
      <img className="parallax" src={Stars} id="stars" alt="" />
      <img className="parallax" src={Moon} id="moon" alt="" />
      <img
        className="parallax"
        src={MountainsBehind}
        id="mountains_behind"
        alt=""
      />
      <h2 id="text">Moon Light</h2>
      <a href="/" id="btn">
        Scroll down
      </a>

      <img
        className="parallax"
        src={MountainsFront}
        id="mountains_front"
        alt=""
      />
    </section>
  );
};

export default Section;

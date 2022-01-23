import React from "react";
import "./App.css";
import Context from "./components/Context";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  React.useEffect(() => {
    let stars = document.getElementById("stars");
    let moon = document.getElementById("moon");
    let mountains_behind = document.getElementById("mountains_behind");
    let mountains_front = document.getElementById("mountains_front");
    let btn = document.getElementById("btn");
    let text = document.getElementById("text");
    let header = document.querySelector("header");

    window.addEventListener("scroll", () => {
      const value = window.scrollY;

      stars.style.left = value * 0.25 + "px";
      moon.style.top = value * 1.05 + "px";
      mountains_behind.style.top = value * 0.5 + "px";
      mountains_front.style.top = value * 0 + "px";
      text.style.marginRight = value * 4 + "px";
      text.style.marginTop = value * .5 + "px";
      btn.style.marginTop = value * 2.5 + "px";
      header.style.top = value * 0.5 + "px";
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Section />
      <Context />
    </div>
  );
}

export default App;

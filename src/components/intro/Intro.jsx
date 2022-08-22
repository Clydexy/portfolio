import "./intro.scss";
import {init} from 'ityped';
import { useEffect, useRef} from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Student", "Developer", "Cinematographer"]
    });
  }, []);

  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/man.png" alt=""/>
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Erik Xu</h1>
            <h3>High School <span ref={textRef}></span></h3>
          </div>
          <a href="#portfolio">
          <img src="assets/down.png" alt=""/>
        </a>
        </div>
    </div>
  )
}

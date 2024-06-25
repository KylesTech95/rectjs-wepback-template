import React, { useState, useEffect } from "react";

const HovComponent = ({ colors }) => {
  const [pos, setPos] = useState({ x: undefined, y: undefined });

  useEffect(() => {
    let bgd = document.querySelector("body");
    window.addEventListener("mousemove", (e) => {
      setPos({ x: e.pageX, y: e.pageY });
      switch (true) {
        case e.pageX > window.innerWidth / 2 && e.pageY > window.innerHeight / 2:
          console.log(e.pageX,e.pageY)
          bgd.style.backgroundColor = colors[0]
          break;
          case e.pageX < window.innerWidth / 2 && e.pageY > window.innerHeight / 2:
          console.log(e.pageX,e.pageY)
          bgd.style.backgroundColor = colors[1]
          break;
          case e.pageX > window.innerWidth / 2 && e.pageY < window.innerHeight / 2:
          console.log(e.pageX,e.pageY)
          bgd.style.backgroundColor = colors[2]
          break;
          case e.pageX < window.innerWidth / 2 && e.pageY < window.innerHeight / 2:
          console.log(e.pageX,e.pageY)
          bgd.style.backgroundColor = colors[3]
          break;
        default:
          console.log(undefined)
          break;
      }

    });
  }, []);
  return (
    <div
      style={{
        position: "absolute",
        height: 30,
        width: 30,
        borderRadius: "50%",
        backgroundColor: "#fff",
        left: pos.x,
        top: pos.y,
      }}
    >
      <h1 className='mouse-actual' style={{ textAlign: "center", height: 200, width: 250 }}>
        Mouse position:{pos.x + " " + pos.y}
      </h1>
    </div>
  );
};
const colors = ["red", "yellow", "green", "blue"];
const App = () => {
  const [text, setText] = useState("Hello Webpack from React!");
  const handleTextChange = (e) => {
    setText("text changed");
  };

  return (
    <>
      <h1 className="textchange" onClick={handleTextChange}>
        {text}
      </h1>
      <HovComponent {...{ colors}} />
    </>
  );
};

export default App;

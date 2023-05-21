import React, { useState } from "react";
import "./Crew.css";
import Douglas from "./Douglas/Douglas";
import { motion } from "framer-motion";
import Mark from "./Mark/Mark";
import Victor from "./Victor/Victor";
import Anousheh from "./Anousheh/Anousheh";

const originalData = [
  {
    title: "COMMANDER",
    name: "DOUGLAS HURLEY",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    title: "MISSION SPECIALIST",
    name: "MARK SHUTTLEWORTH",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    title: "PILOT",
    name: "VICTOR GLOVER",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    title: "FLIGHT ENGINEER",
    name: "ANOUSHEH ANSARI",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

const Crew = () => {
  const [isDown, setIsDown] = useState(false);
  const [index, setIndex] = useState(0);
  const [grabClass, setGrabClass] = useState("");
  const [initialX, setInitialX] = useState();
  const [data, setData] = useState(originalData[0]);
  const mouseDownHandler = (down) => {
    setInitialX(down.pageX);
    setIsDown(true);
    setGrabClass("Grabbed");
    console.log(down.pageX);
  };
  const mouseMoveHandler = (isMoving) => {
    if (isDown) {
      const x = isMoving.pageX - initialX;
      if (index === 0 && x < -1000) {
        setIndex(1);
        setIsDown(false);
        setData(originalData[1]);
        return;
      }
      if (index === 1 && x < -1000) {
        setIndex(2);
        setIsDown(false);
        setData(originalData[2]);
        return;
      }
      if (index === 2 && x < -1000) {
        setIndex(3);
        setIsDown(false);
        setData(originalData[3]);
        return;
      }
      if (index === 3 && x < -1300) {
        setIndex(0);
        setIsDown(false);
        setData(originalData[0]);
        return;
      }
    }
  };
  const mouseUpHandler = (up) => {
    setGrabClass("");
    setIsDown(false);
    console.log(up.pageX);
  };
  return (
    <div className="Crew">
      <div className="navigateddTitle">
        <strong>02 </strong>MEET YOUR CREW
      </div>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: 0 }}
        className={`CrewContainer ${grabClass}`}
        onMouseMove={mouseMoveHandler}
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}>
        <div className="crewDetail">
          <div className="title">{data.title}</div>
          <div className="crewName">{data.name}</div>
          <div className="crewDescription">{data.description}</div>
        </div>
        <div className="CrewPhotoCss">
          {index === 0 ? (
            <Douglas />
          ) : index === 1 ? (
            <Mark />
          ) : index === 2 ? (
            <Victor />
          ) : index === 3 ? (
            <Anousheh />
          ) : (
            ""
          )}
        </div>
      </motion.div>
      <div className="crewNavigationShower">
        <div
          style={{ backgroundColor: index === 0 ? "white" : "#979797" }}></div>
        <div
          style={{ backgroundColor: index === 1 ? "white" : "#979797" }}></div>
        <div
          style={{ backgroundColor: index === 2 ? "white" : "#979797" }}></div>
        <div
          style={{ backgroundColor: index === 3 ? "white" : "#979797" }}></div>
      </div>
    </div>
  );
};

export default Crew;

import React, { useState } from "react";
import Capsule from "./Capsule/Capsule";
import Launch from "./Launch/Launch";
import Spaceport from "./Spaceport/Spaceport";
import "./Technology.css";

const originalData = [
  {
    title: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    title: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    title: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];
const Technology = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(originalData[0]);

  const navigation = (idx) => {
    setData(originalData[idx]);
    setIndex(idx);
  };
  return (
    <div className="Technology">
      <div className="navigateTitle">
        <strong>03 </strong>SPACE LAUNCH 101
      </div>
      <div className="technologyDetail">
        <div style={{ display: "flex", marginLeft: "12.5%", marginTop: "4%" }}>
          <div className="techNavigation">
            <div
              onClick={() => navigation(0)}
              style={{
                backgroundColor: index === 0 ? "white" : "",
                color: index === 0 ? "black" : "",
              }}>
              1
            </div>
            <div
              onClick={() => navigation(1)}
              style={{
                backgroundColor: index === 1 ? "white" : "",
                color: index === 1 ? "black" : "",
              }}>
              2
            </div>
            <div
              onClick={() => navigation(2)}
              style={{
                backgroundColor: index === 2 ? "white" : "",
                color: index === 2 ? "black" : "",
              }}>
              3
            </div>
          </div>
          <div className="techDescription">
            <div style={{ width: "63%", marginLeft: 50 }}>
              <div className="terminology">THE TERMINOLOGY…</div>
              <div className="techTitle">{data.title}</div>
              <div className="crewDescription">{data.description}</div>
            </div>
          </div>
        </div>
        <div>
          {index === 0 ? (
            <Launch />
          ) : index === 1 ? (
            <Spaceport />
          ) : index === 2 ? (
            <Capsule />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Technology;

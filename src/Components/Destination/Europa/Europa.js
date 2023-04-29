import React from "react";

const Europa = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 350,
      }}>
      <div
        style={{
          fontFamily: "Bellefair",
          paddingTop: 35,
          fontSize: 90,
        }}>
        EUROPA
      </div>
      <div style={{ fontFamily: "Barlow" }}>
        The smallest of the four Galilean moons orbiting Jupiter, Europa is a
        winter lover’s dream. With an icy surface, it’s perfect for a bit of ice
        skating, curling, hockey, or simple relaxation in your snug wintery
        cabin.
      </div>
      <div>
        <hr style={{ border: "0.01px solid rgba(255, 255, 255, 0.6)" }} />
      </div>
      <div
        style={{
          display: "flex",
        }}>
        <div style={{ width: "50%", fontFamily: "Bellefair" }}>
          <div style={{ fontSize: 12 }}>AVG. DISTANCE</div>
          <div style={{ fontSize: 24 }}>628 MIL. KM</div>
        </div>
        <div style={{ fontFamily: "Bellefair" }}>
          <div style={{ fontSize: 12 }}>EST. TRAVEL TIME</div>
          <div style={{ fontSize: 24 }}>3 YEARS</div>
        </div>
      </div>
    </div>
  );
};

export default Europa;

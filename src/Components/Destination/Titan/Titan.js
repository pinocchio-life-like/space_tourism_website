import React from "react";

const Titan = () => {
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
        TITAN
      </div>
      <div style={{ fontFamily: "Barlow" }}>
        The only moon known to have a dense atmosphere other than Earth, Titan
        is a home away from home (just a few hundred degrees colder!). As a
        bonus, you get striking views of the Rings of Saturn.
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
          <div style={{ fontSize: 24 }}>1.6 BIL. KM</div>
        </div>
        <div style={{ fontFamily: "Bellefair" }}>
          <div style={{ fontSize: 12 }}>EST. TRAVEL TIME</div>
          <div style={{ fontSize: 24 }}>7 YEARS</div>
        </div>
      </div>
    </div>
  );
};

export default Titan;

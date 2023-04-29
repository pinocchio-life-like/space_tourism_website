import React from "react";

const Moon = () => {
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
        MOON
      </div>
      <div style={{ fontFamily: "Barlow" }}>
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
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
          <div style={{ fontSize: 24 }}>384,400 KM</div>
        </div>
        <div style={{ fontFamily: "Bellefair" }}>
          <div style={{ fontSize: 12 }}>EST. TRAVEL TIME</div>
          <div style={{ fontSize: 24 }}>3 DAYS</div>
        </div>
      </div>
    </div>
  );
};

export default Moon;

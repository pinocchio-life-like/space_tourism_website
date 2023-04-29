import React from "react";

const HeaderLogo = () => {
  return (
    <div
      style={{
        width: 40,
        height: 40,
        display: "flex",
        borderRadius: "100%",
        overflow: "hidden",
      }}>
      <div style={{ width: 20, height: 40 }}>
        <div
          style={{
            width: 20,
            height: 20,
            borderBottomRightRadius: "100%",
            background: "white",
          }}></div>
        <div
          style={{
            width: 20,
            height: 20,
            borderTopRightRadius: "100%",
            background: "white",
          }}></div>
      </div>
      <div style={{ width: 20, height: 40 }}>
        <div
          style={{
            width: 20,
            height: 20,
            borderBottomLeftRadius: "100%",
            background: "white",
          }}></div>
        <div
          style={{
            width: 20,
            height: 20,
            borderTopLeftRadius: "100%",
            background: "white",
          }}></div>
      </div>
    </div>
  );
};

export default HeaderLogo;

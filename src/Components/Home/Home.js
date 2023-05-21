import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div>
          <div className="SpaceIntro">
            <div
              style={{
                fontSize: 18,
                fontFamily: "Barlow",
                letterSpacing: "4px",
                fontStretch: "ultra-expanded",
              }}>
              SO YOU WANT TO TRAVEL TO
            </div>
            <div
              style={{
                marginLeft: -9.3,
                fontFamily: "Bellefair",
                fontSize: "120px",
                letterSpacing: "10.5px",
              }}>
              SPACE
            </div>
            <div style={{ fontFamily: "Barlow" }}>
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experiance
            </div>
          </div>
        </div>
        <div>
          <div className={`Explore ${true ? "BumpUp" : ""}`}>EXPLORE</div>
        </div>
      </div>
    </div>
  );
};

export default Home;

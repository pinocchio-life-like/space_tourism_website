import React, { useContext } from "react";
import MenuContext from "../../MenuContext/menu-context";
import "./Header.css";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import MenuList from "./MenuList/MenuList";
const Header = () => {
  return (
    <div>
      <div className="Header">
        <div className="HeaderLogo">
          <HeaderLogo />
        </div>
        <div style={{ marginLeft: "6.3%" }}>
          <hr
            style={{
              width: "420px",
              border: "0.001px solid rgba(255,255,255, 0.25)",
            }}
          />
        </div>
        <div className="MenuListContainer">
          <MenuList />
        </div>
      </div>
    </div>
  );
};

export default Header;

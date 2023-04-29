import React, { useState } from "react";

const MenuContext = React.createContext({
  selectedRoute: "",
  selectedDestination: "",
  onRouteChange: (selected) => {},
  onDestinationChange: (selected) => {},
});
export const MenuContextProvider = (props) => {
  const [selectedRoute, setSelectedRoute] = useState("Home");
  const [selectedDestination, setSelectedDestination] = useState("Moon");
  const [selectedPictureClass, setSelectedPictureClass] =
    useState("MoonPictureClass");

  const onRouteChangeHandler = (selected) => {
    setSelectedRoute(selected);
  };
  const onDestinationChangeHandler = (selected) => {
    setSelectedDestination(selected);
    if (selected === "Moon") {
      setSelectedPictureClass("MoonPictureClass");
    } else if (selected === "Mars") {
      setSelectedPictureClass("MarsPictureClass");
    } else if (selected === "Europa") {
      setSelectedPictureClass("EuropaPictureClass");
    } else if (selected === "Titan") {
      setSelectedPictureClass("TitanPictureClass");
    }
  };

  return (
    <MenuContext.Provider
      value={{
        selectedRoute: selectedRoute,
        selectedDestination: selectedDestination,
        selectedPictureClass: selectedPictureClass,
        onRouteChange: onRouteChangeHandler,
        onDestinationChange: onDestinationChangeHandler,
      }}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContext;

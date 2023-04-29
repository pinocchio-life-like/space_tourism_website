import { useContext, useEffect, useState } from "react";
import "./App.css";
import Crew from "./Components/Crew/Crew";
import Destination from "./Components/Destination/Destination";
import Home from "./Components/Home/Home";
import Technology from "./Components/Technology/Technology";
import Header from "./Layout/Header/Header";
import MenuContext from "./MenuContext/menu-context";

function App() {
  const context = useContext(MenuContext);

  return (
    <div className="App">
      <Header />
      {context.selectedRoute === "Home" ? (
        <Home />
      ) : context.selectedRoute === "Destination" ? (
        <Destination />
      ) : context.selectedRoute === "Crew" ? (
        <Crew />
      ) : (
        <Technology />
      )}
    </div>
  );
}

export default App;

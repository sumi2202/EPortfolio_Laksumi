import React from "react";
import MainPageHero from "./components/MainPageHero";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <MainPageHero/>
      <About />

    </div>
  );
};

export default App;

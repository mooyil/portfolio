import { useState } from "react";
import viteLogo from "/vite.svg";
import Navbar from "./komponenten/Navbar";
import Hero from "./komponenten/Hero";
import Footer from "./komponenten/Footer";
import AboutMe from "./komponenten/AboutMe";
import Skills from "./komponenten/Skills";
import Kontakt from "./komponenten/Kontakt";
import skillsBg from "./assets/skillsbg.jpeg";
// import skillsBg from "./assets/bg1.jpg"
import Formular from "./komponenten/Formular";

function App() {

  return (
    <div className="font-poppins">
      <Navbar />
      <Hero />
      <div
        style={{
          backgroundImage: `url(${skillsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <AboutMe />
        <Skills />
        {/* <Kontakt/> */}
        <Formular />
      </div>
      <Footer />
    </div>
  );
}

export default App;

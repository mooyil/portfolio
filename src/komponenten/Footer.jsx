import { Call, Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import React from "react";
import Logo from "./svgs/Logo";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 py-20">
      <div className="flex flex-col sm:flex-row justify-around">
        <div className="mb-6 sm:mb-0">
          <Logo />
        </div>
        <div className="mb-6 sm:mb-0">
          <p className="text-lg font-bold mb-2">Informationen</p>
          <div className="flex flex-col">
            <a href="#about-me">Über mich</a>
            <a href="#skills">Skills</a>
            <a href="#kontakt">Kontakt</a>
          </div>
        </div>
        <div className="mb-6 sm:mb-0">
          <p className="text-lg font-bold mb-2">Kontakt</p>
          <p>Telefon: 01590 8411715</p>
          <p>E-Mail: yildiz.muhammed@outlook.de</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

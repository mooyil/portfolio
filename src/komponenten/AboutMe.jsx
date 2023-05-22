import React from "react";
import bild from "../assets/aboutme.jpg";

const AboutMe = () => {
  return (
    <section id="about-me" className="p-2 sm:p-6 py-12  text-white">
      <div className=" flex flex-col sm:flex-row items-center justify-center">
        <div data-aos="zoom-in" className="max-w-[600px] p-6 rounded-lg">
          <div className="mb-4">
            <h2 className="text-3xl sm:text-4xl ">Über Mich</h2>
          </div>
          <hr className="mb-4" />
          <div className="mb-4">
            <p className="">
              Mein Name ist Muhammed Yildiz und ich bin begeistert von der Welt
              der Softwareentwicklung. Im Sommer 2022 habe ich meine
              Leidenschaft für das Programmieren entdeckt und mich eigenständig
              in dieses faszinierende Gebiet eingearbeitet. Jetzt, nachdem ich
              erfolgreich meine Schulausbildung abgeschlossen habe, stehe ich
              voller Vorfreude vor meinem nächsten großen Schritt: dem Studium
              der Informatik.
              <br className="my-2" />
              Was mich besonders antreibt, ist die Zusammenarbeit in
              Teamprojekten. Gemeinsam mit anderen IT-Begeisterten und engagierten
              Entwicklern Ideen zu verwirklichen und innovative Lösungen zu
              schaffen, begeistert mich enorm.
            </p>
          </div>
          <div className="py-4">
            <a href="#kontakt" className="bg-white text-gray-900 p-4 px-8 rounded">
              Kontakt
            </a>
          </div>
        </div>
        <div data-aos="zoom-in" className=" p-6">
          <img src={bild} alt="bild" className="rounded-xl sm:min-w-[300px]" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

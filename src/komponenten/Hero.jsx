import React, { useEffect } from "react";
import herobg from "../assets/herobg.jpg";
import {
  ArrowDownward,
  ArrowDownwardRounded,
  ExpandCircleDown,
  GitHub,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ backgroundImage: `url(${herobg})` }} className="h-[100vh]">
      <div
        style={{ zIndex: 20 }}
        className="relative flex flex-col justify-center items-center h-full px-4"
      >
        <div className="flex flex-col justify-center text-center">
          <div className=" text-white flex flex-col items-center">
            <h1
              data-aos="zoom-in"
              data-aos-delay="200"
              className="text-[40px] leading-[40px] sm:leading-[50px] sm:text-[50px] md:text-[70px] mb-4 md:mb-6 font-bold"
            >
              Hallo ich bin Muhammed
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-delay="800"
              className="text-[18px] md:text-[20px] max-w-[750px] mb-4 md:mb-6 "
            >
              Ich bin ein selbstelernter, motivierter Full-Stack-Entwickler mit
              einem starken Interesse an Technologien und einer ambitionierten
              Arbeitsweise.
            </p>
            <div data-aos="zoom-out" data-aos-delay="1400" className="flex">
              <div className="px-2">
                <a href="https://github.com/mooyil" target="blank">
                  <GitHub
                    sx={{
                      fontSize: {
                        xs: "35px",
                        sm: "45px",
                        "&:hover": { opacity: 0.8 },
                      },
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="1800"
          className="absolute bottom-36 sm:bottom-16 duration-500 cursor-pointer"
        >
          <a href="#about-me">
            <ExpandCircleDown
              sx={{ fontSize: { xs: "45px", sm: "60px" }, color: "white" }}
            />
          </a>
        </div>
      </div>
      <div
        style={{ zIndex: 10 }}
        className="absolute inset-0 h-full bg-black opacity-40"
      />
    </div>
  );
};

export default Hero;

import React from "react";
import { ReactSVG } from "react-svg";
import coding from "../assets/coding.svg";
import JsSvg from "./svgs/JsSvg";
import LinuxSvg from "./svgs/LinuxSvg";
import ReactSvg from "./svgs/ReactSvg";
import SqlSvg from "./svgs/SqlSvg";
import NodeSvg from "./svgs/NodeSvg";
import GitSvg from "./svgs/GitSvg";
import { Rating } from "@mui/material";
import "../styles/skills.css";
import skillsBg from "../assets/skillsbg.jpeg";
import DockerSvg from "./svgs/DockerSvg";
import TailwindSvg from "./svgs/TailwindSvg";
import StrapiSvg from "./svgs/StrapiSvg";
import Express from "./svgs/Express";
import EmacsSvg from "./svgs/EmacsSvg";

const Skills = () => {
  return (
    <section id="skills" className=" py-12  text-white">
      <div className="p-2 sm:p-6 ">
        <div data-aos="fade-down" className="mb-12 flex flex-col justify-center items-center">
          <ReactSVG className="mb-6" src={coding} />
          <h2 className="text-3xl sm:text-4xl ">Skills & Technologien</h2>
        </div>
        <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-3 max-w-[400px] sm:max-w-[1000px] mx-auto justify-items-center">
          <div data-aos="fade-down" className="flex items-center skillParent relative">
            <JsSvg />
            <div className="absolute flex flex-col justify-center items-center inset-0 skillChild opacity-0 duration-500 rounded-lg bg-accent h-full">
              <span className="font-bold">Javascript</span>

              <Rating defaultValue={4} readOnly />
            </div>
          </div>
          <div data-aos="fade-down" className="flex justify-center items-center skillParent relative">
            {/* <ReactSVG className="bg-white p-1 rounded-lg" src={linux} /> */}
            <LinuxSvg />
            <div className="absolute flex flex-col justify-center items-center inset-0 skillChild opacity-0 duration-500 rounded-lg bg-accent h-full">
              <span className="font-bold">Linux</span>

              <Rating defaultValue={4} readOnly />
            </div>
          </div>
          <div data-aos="fade-down" className="flex items-center relative skillParent">
            {/* <ReactSVG className="" src={react} /> */}
            <ReactSvg />
            <div className="absolute flex flex-col justify-center items-center inset-0 skillChild opacity-0 duration-500 rounded-lg bg-accent h-full">
              <span className="font-bold">React</span>

              <Rating defaultValue={5} readOnly />
            </div>
          </div>
          <div data-aos="fade-down" className="flex justify-center items-center relative skillParent">
            {/* <ReactSVG className="bg-white p-1 rounded-lg" src={sql} /> */}
            <SqlSvg />
            <div className="absolute flex flex-col justify-center items-center inset-0 skillChild opacity-0 duration-500 rounded-lg bg-accent h-full">
              <span className="font-bold">SQL</span>

              <Rating defaultValue={2} readOnly />
            </div>
          </div>
          <div data-aos="fade-down" className="flex justify-center items-center relative skillParent">
            {/* <ReactSVG className="bg-white p-1 rounded-lg" src={node} /> */}
            <Express />
            <div className="absolute flex flex-col justify-center items-center inset-0 skillChild opacity-0 duration-500 rounded-lg bg-accent h-full">
              <span className="font-bold">Express.js</span>
              <Rating defaultValue={3} readOnly />
            </div>
          </div>
          <div data-aos="fade-down" className="flex justify-center items-center relative skillParent">
            {/* <ReactSVG className="bg-white p-1 rounded-lg" src={git} /> */}
            <GitSvg />
            <div className="absolute flex flex-col justify-center items-center inset-0 skillChild opacity-0 duration-500 rounded-lg bg-accent h-full">
              <span className="font-bold">Git</span>

              <Rating defaultValue={4} readOnly />
            </div>
          </div>
          <div data-aos="fade-down" className="flex justify-center items-center relative skillParent">
            {/* <ReactSVG className="bg-white p-1 rounded-lg" src={git} /> */}
            <DockerSvg />
            <div className="absolute flex flex-col justify-center items-center inset-0 skillChild opacity-0 duration-500 rounded-lg bg-accent h-full">
              <span className="font-bold">Docker</span>

              <Rating defaultValue={4} readOnly />
            </div>
          </div>
          <div data-aos="fade-down" className="flex justify-center items-center relative skillParent">
            {/* <ReactSVG className="bg-white p-1 rounded-lg" src={git} /> */}
            <TailwindSvg />
            <div className="absolute flex flex-col justify-center items-center inset-0 skillChild opacity-0 duration-500 rounded-lg bg-accent h-full">
              <span className="font-bold">TailwindCss</span>

              <Rating defaultValue={5} readOnly />
            </div>
          </div>
          <div data-aos="fade-down" className="flex justify-center items-center relative skillParent">
            {/* <ReactSVG className="bg-white p-1 rounded-lg" src={git} /> */}
            <StrapiSvg />
            <div className="absolute flex flex-col justify-center items-center inset-0 skillChild opacity-0 duration-500 rounded-lg bg-accent h-full">
              <span className="font-bold">Strapi CMS</span>

              <Rating defaultValue={4} readOnly />
            </div>
          </div>
          <div data-aos="fade-down" className="flex justify-center items-center relative skillParent">
            {/* <ReactSVG className="bg-white p-1 rounded-lg" src={git} /> */}
            <EmacsSvg />
            <div className="absolute flex flex-col justify-center items-center inset-0 skillChild opacity-0 duration-500 rounded-lg bg-accent h-full">
              <span className="font-bold">Emacs</span>

              <Rating defaultValue={3} readOnly />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

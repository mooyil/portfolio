import {
  AccessTime,
  AccessTimeOutlined,
  Call,
  Email,
  LocationOn,
  LocationOnOutlined,
  MailOutline,
  WatchLater,
} from "@mui/icons-material";
import { useState } from "react";
import Form from "./Formular";
import Formular from "./Formular";

const Kontakt = ({ toggle, setFormModal, translation }) => {
  return (
    <section
      id="kontakt"
      className={` px-6 pb-12 pt-12 font-poppins 2 ${
        toggle ? "blur-animation-in" : "blur-animation-out"
      }`}
    >
      <div
        data-aos="zoom-in"
        className="text-textgray mx-0 text-white sm:mx-4 mb-12 sm:w-1/2"
      >
        <h2 className=" text-3xl sm:text-4xl font-extrabold mb-4">Kontakt</h2>
        <div className="flex pb-4 ">
          {/* <hr className="w-[100px] h-[2px] font-extrabold bg-textgray" />
            <hr className="w-[180px] h-[2px] font-extrabold bg-gray-300" /> */}
        </div>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren,
      </div>
      <div className="flex flex-col items-center sm:flex-row sm:mb-0 mx-0 sm:mx-4">
        <div data-aos="zoom-in" className="sm:w-1/2 w-full ">
          {/* <Form/> */}
          <Formular />
        </div>
        <div
          data-aos="zoom-in"
          className="bg-background2 flex flex-col justify-center sm:w-1/2 w-full sm:min-h-[500px] sm:px-0 md:px-4 p-4 rounded-lg"
        >
          <div className=" text-textwhite">
            <h3 className="text-header text-2xl sm:text-3xl p-8 pb-6 px-0 sm:px-6 md:px-8 ">
              Infos
            </h3>

            <div className=" py-4 w-[40%] pl-0 sm:pl-6 md:pl-8">
              <hr className="bg-paragraph h-1 border-none" />
            </div>
          </div>
          <div className="text-textwhite ">
            <div className="mt-6 px-0 sm:px-6 md:px-8 pb-4">
              <MailOutline fontSize="large" className="text-header" />
              <span className="text-paragraph ml-2">
                Email: m.yildiz.26@outlook.de
              </span>
            </div>
            <div className="px-0 sm:px-6 md:px-8 py-4">
              <Call fontSize="large" className="text-header" />
              <span className="text-paragraph ml-2">01590 8411715</span>
            </div>
            {/* <div className="px-0 sm:px-6 md:px-8 py-4">
                <LocationOnOutlined fontSize="large" className="text-header"/>
                <span className="text-paragraph ml-2">{kontaktContent.kontaktBox.adress}</span>
              </div> */}
            <div className="px-0 sm:px-6 md:px-8 py-4 pb-8">
              <AccessTimeOutlined fontSize="large" className="text-header" />
              <span className="text-paragraph ml-2">10 - 20</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontakt;

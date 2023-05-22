import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import { ContactEmergency, EmailOutlined } from "@mui/icons-material";
import FormModal from "./FormModal";

const Formular = ({}) => {
  const [isNotVerified, setIsNotVerified] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [nameFocus, setNameFocus] = useState(false);
  const [subjectFocus, setSubjectFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);
  const form = useRef();
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [formModalShow, setFormModalShow] = useState(false);

  const clearForm = () => {
    setName("");
    setSubject("");
    setEmail("");
    setMessage("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // const handleRecaptcha = (token) => {
  //   setRecaptchaToken(token);
  //   setIsNotVerified(false);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Überprüfen Sie, ob das reCAPTCHA korrekt gelöst wurde
    // if (recaptchaToken) {
      try {
        const templateParams = {
          user_name: name,
          subject: subject,
          user_email: email,
          message: message,
          // "g-recaptcha-response": recaptchaToken, // Fügen Sie den reCAPTCHA-Token zu den Template-Parametern hinzu
        };
        const response = await emailjs.send(
          "service_23kqg8i",
          "template_t7ghabg",
          templateParams,
          "jL_9rfnQpCzUyrrIg"
        );
        console.log("E-Mail erfolgreich gesendet:", response);
        clearForm();
        setFormModalShow(true);
      } catch (error) {
        console.error("E-Mail senden fehlgeschlagen:", error);
      }
    // } else {
    //   setIsNotVerified(true);
    // }
  };

  return (
    <section id="kontakt" className="py-12 px-4 sm:px-6">
      <div data-aos="fade-up" className="text-center">
        <EmailOutlined sx={{ fontSize: "70px", color: "white", mb: 2 }} />
        <h2 className="text-center text-3xl text-white sm:text-4xl mb-12">
          Get in touch
        </h2>
      </div>
      <form
        data-aos="fade-up"
        ref={form}
        onSubmit={handleSubmit}
        className="bg-black max-w-[1000px] mx-auto  text-white rounded-xl p-4 py-12 relative"
      >
        <div className="flex flex-col space-y-12 items-center w-full">
          <div className="relative w-[100%] text-center">
            <input
              required
              name="name"
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
              onFocus={() => setNameFocus(true)}
              onBlur={() => setNameFocus(false)}
              className="bg-black border-b-2  focus:border-purple-500 focus:outline-none w-[100%] sm:w-[90%] "
            />
            <label
              htmlFor="name"
              className={`transition-all duration-300 absolute left-0 sm:left-12 bottom-2 ${
                nameFocus || name ? "text-white -translate-y-6" : "text-white"
              }`}
            >
              Name
            </label>
          </div>
          <div className="relative  w-[100%] text-center">
            <input
              required
              name="subject"
              id="subject"
              type="text"
              value={subject}
              onChange={handleSubjectChange}
              onFocus={() => setSubjectFocus(true)}
              onBlur={() => setSubjectFocus(false)}
              className="bg-black border-b-2 2 border-white focus:border-purple-500 focus:outline-none w-[100%] sm:w-[90%] "
            />
            <label
              htmlFor="subject"
              className={`transition-all duration-300 absolute left-0 sm:left-12 bottom-2 ${
                subjectFocus || subject
                  ? "text-white -translate-y-6"
                  : "text-white"
              }`}
            >
              Betreff
            </label>
          </div>

          <div className="relative w-[100%] text-center">
            <input
              required
              name="email"
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              className="bg-black border-b-2 2 border-white focus:border-purple-500 focus:outline-none w-[100%] sm:w-[90%] "
            />
            <label
              htmlFor="email"
              className={`transition-all duration-300 absolute left-0 sm:left-12 bottom-2 ${
                emailFocus || email ? "text-white -translate-y-6" : "text-white"
              }`}
            >
              Email
            </label>
          </div>

          <div className="relative  w-[100%] text-center">
            <textarea
              required
              name="message"
              id="message"
              value={message}
              onChange={handleMessageChange}
              onFocus={() => setMessageFocus(true)}
              onBlur={() => setMessageFocus(false)}
              className="bg-black border-b-2 border-white focus:border-purple-500  focus:outline-none h-20 w-[100%] sm:w-[90%] resize-none"
            ></textarea>
            <label
              htmlFor="message"
              className={`transition-all duration-300 absolute left-0 sm:left-12 bottom-2 ${
                messageFocus || message
                  ? "text-white -translate-y-20"
                  : "text-white"
              }`}
            >
              Nachricht
            </label>
          </div>
          {/* <div className=" w-[100%] sm:w-[90%]">
            <ReCAPTCHA 
              sitekey="6LehRS4mAAAAALyWPUQbZdZASUIanXauJnxDVHCw"
              onChange={handleRecaptcha}
              type="image"
            />
          </div> */}
          {/* <p className={`text-red-600 ${isNotVerified ? "block" : "hidden"}`}>
            Recaptcha verifizieren!
          </p> */}

          <button
            type="submit"
            className="bg-accent rounded-lg text-white py-4 text-textwhite w-[100%] sm:w-[90%] text-center hover:opacity-80 duration-100"
          >
            <span className="uppercase">Senden</span>
          </button>
        </div>
      </form>
      {formModalShow && (
        <FormModal
          formModalShow={formModalShow}
          setFormModalShow={setFormModalShow}
        />
      )}
    </section>
  );
};

export default Formular;

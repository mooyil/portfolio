import React from "react";
import "../styles/formModal.css";

const FormModal = ({ setFormModalShow, translation }) => {
  return (
    <div className="form-modal modal-fadeIn">
      <div className="mt-[35vh] rounded-md bg-background2 w-80 p-6 mx-auto flex flex-col justify-center items-center">
        <p className="text-center mb-4">
          {translation === "en"
            ? "The form was send succesfully"
            : "Das Formular wurde erfolgreich abgschickt!"}
        </p>
        <button
          onClick={() => setFormModalShow(false)}
          type="submit"
          className="bg-accent w-[50%]  rounded-md text-white  py-2 px-8  hover:opacity-80 duration-100"
        >
          <span className="uppercase text-center">Okay</span>
        </button>
      </div>
    </div>
  );
};

export default FormModal;

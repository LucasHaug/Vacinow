import React, { useState } from "react";
import Form from "./formTemplate";
import Grid from "react-fast-grid";

import "../../styles/registrationForm.css";

function RegistrationForm() {
  var forms = [];
  const [form, setForm] = useState([1]);

  function formList() {
    return form.map((formID) => {
      console.log(formID);
      return <Form />;
    });
  }

  function handleSubmit(receiveForms) {
    // manda pelo axios
    console.log(receiveForms);
  }

  return (
    <div className="content" id="forms">
      <header>
        <a href="/">
          <img
            src="../images/vacinow3.png"
            alt="vacinow-logo"
            className="imgForm"
          />
        </a>
        <hr />
      </header>
      <main>
        <div className="description">
          <h1> Orientação básica </h1>
        </div>

        <div className="formInputs">
          <div className="formTable">
            {formList()}
            <button
              type="submit"
              onClick={() => {
                handleSubmit();
              }}
            >
              <img src="../images/send.png" alt="minus icon" className="icon" />
              <p>Submit</p>
            </button>
          </div>

          <div className="formBtns">
            <button
              className="formButton addDel"
              onClick={() => {
                setForm([...form, form.length + 1]);
              }}
            >
              <img src="../images/plus.png" alt="plus icon" className="icon" />
              <p>Incluir Form</p>
            </button>
            <button
              className="formButton addDel"
              onClick={() => {
                form.pop();
                setForm([...form]);
              }}
            >
              <img
                src="../images/minus.png"
                alt="minus icon"
                className="icon"
              />
              <p>Excluir Form</p>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RegistrationForm;

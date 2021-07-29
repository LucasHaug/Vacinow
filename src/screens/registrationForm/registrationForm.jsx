import React, { useState } from "react";
import FormTemplate from "./formTemplate";

import formsJson from "./forms.json";
import "../../styles/registrationForm.css";
import api from "axios";

var id = 0

function RegistrationForm(props) {
  var initialForms = [formsJson];
  
  initialForms.id = 0
  const [form, setForm] = useState([initialForms]);

  function formList() {
    return form.map((formVecSend) => {
      console.log(formVecSend.id, formVecSend)
      return <FormTemplate forms={formVecSend} key={formVecSend.id} />;
    });
  }

  async function handleSubmit() {
    // manda pelo axios
    console.log("form atulaizado", form)
    console.log("n sei ", form[0][0])

    var payload = [ ]

    form.forEach(element => {
      console.log("teste", element);
      delete element['0'];
      console.log("teste2", element);

      payload.push(element);
      console.log(payload);
    })
    
    console.log(payload);

    await api.post('https://api.vacinow.tk/formsubmit/',
      payload
    ).then(function (response) {
        console.log(response.data)
        alert(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
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
                var newForms = [formsJson];
                id = id + 1
                newForms.id = id
                setForm([...form, newForms]);
              }}
            >
              <img src="../images/plus.png" alt="plus icon" className="icon" />
              <p>Incluir Form</p>
            </button>
            <button
              className="formButton addDel"
              onClick={() => {
                id = id - 1
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

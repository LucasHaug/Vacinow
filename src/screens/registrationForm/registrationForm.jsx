import React, { useState } from 'react';
import Form from './formTemplate'

function RegistrationForm() {
    var forms = []
    const [form, setForm] = useState([1]);

    function formList() {
        return form.map(formID => {
            console.log(formID)
            return <Form currentID={formID} submit={handleSubmit} forms={forms}/>
        })
    }

    function handleSubmit(){
        // manda pelo axios
        console.log("foi")
    }

    return (
        <div className="containerForm" >
            <div className="headerForm">
                <a href="/">
                    <img src="../images/vacinow3.png" alt="vacinow-logo" className="imgForm" />
                </a>
            </div>
            {formList()}
            <button 
            type="submit" 
            onClick={() => { handleSubmit()}}>
                Submit
                </button>
            <button
                className="formButton"
                onClick={() => { setForm([...form, form.length + 1]) }
                }>
                + Add Form
            </button>
            <button
                className="formButton"
                onClick={() => {
                    form.pop()
                    setForm([...form,])
                }}>
                - Delete Form
            </button>
        </div>
    );
}

export default RegistrationForm
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
        <div className="container" id="forms" >
            <div className="headerForm">
                <a href="/">
                    <img src="../images/vacinow3.png" alt="vacinow-logo" className="imgForm" />
                </a>
                <hr />
            </div>

            <div className="formReg">
                {formList()}
                <button type="submit" onClick={()=> { handleSubmit()}}>
                    <img src="../images/send.png" alt="minus icon" className="icon" />
                    <p>Submit</p>
                </button>
            </div>

            <div className="formBtns">
                <button className="formButton" onClick={()=> { setForm([...form, form.length + 1]) }
                    }>
                    <img src="../images/plus.png" alt="plus icon" className="icon"/>
                    <p>Add Form</p>
                </button>
                <button className="formButton" onClick={()=> {
                    form.pop()
                    setForm([...form,])
                    }}>
                    <img src="../images/minus.png" alt="minus icon" className="icon"/>
                    <p>Delete Form</p>
                </button>
                
            </div>

        </div>
    );
}

export default RegistrationForm
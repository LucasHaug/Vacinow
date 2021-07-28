import React, { useState, useEffect } from "react";
import '../styles/upload.css'
import api from "axios"

import FormTemplate from "./registrationForm/formTemplate"

function CheckPage() {
    const [Form, setForm] = useState([]);

    async function start() {
        await api.get('https://api.vacinow.tk/')
            .then(function (response) {
                setForm(response.data)
                console.log(Form)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    
    useEffect(() => {
        start()
    }, [])
    

    function formList() {
        console.log(Form)

        return Form.message
        // return Form.map((formVecSend) => {
        //   console.log(formVecSend.id)
        //   return <FormTemplate forms={formVecSend} key={formVecSend.id} />;
        // });
    }

    return (
        <div className="content" id="upload">
            <header>
                <a href="/">
                    <img src="../images/vacinow3.png" alt="vacinow-logo" />
                </a>
                <hr />
            </header>

            <main>
                {formList()}
            </main>

        </div>
    )
}
export default CheckPage

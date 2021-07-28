import { useState } from 'react'
import api from 'axios'

import '../styles/upload.css'


const Upload = () => {
    const [image, setImage] = useState()

    function handleSubmit(event) {
        event.preventDefault()
        
        console.log(image)
        if (!image) {
            return
        }
        const data = new FormData()
        data.append('image', image)

        api.post('https://api.vacinow.tk/readfile', data)
            .then(function (response) {
                alert(response.data.text)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    function handleImage(event){
        if (!event.target.files){
            return;
        }
        setImage(event.target.files[0]);
    };
    //todo: preview da imagem
    return (
    <div className="content" id="upload">
        <header>
            <a href="/">
                <img src="../images/vacinow3.png" alt="vacinow-logo"/>
            </a>
            <hr />
        </header>

        <main>
            <div className="description">
                <h1>Faça upload do formulário scanneado: </h1>
            </div>

            <div className="upload">
                    <form onSubmit={handleSubmit}>
                        <input  onChange={handleImage} type="file" accept="image/*;capture=camera" id="imgButton" />

                        <button type="submit" className="linkButton">
                            <img src="../images/send.png" alt="send-icon" className="icon" />
                            <p>Enviar</p>
                        </button>
                    </form>

            {/*! falhei no alinhamento deste inferno: */}
                <h2>Ou então preencha o formulário diretamente: </h2>
                <button onClick={()=>{window.location = "/registration"}} className="linkButton">
                    <img src="../images/contact-form.png" alt="forms-icon" className="icon" />
                    <p>Preencher Formulário</p>
                </button>
            </div>
        </main>

    </div>
    )
}
export default Upload
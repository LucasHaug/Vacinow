import { useState } from 'react'
import api from 'axios'

import '../styles/upload.css'


const Upload = () => {
    const [image, setImage] = useState()

    function handleSubmit(event) {
        event.preventDefault()

        if (!image) {
            return
        }
        const data = new FormData()

        data.append('image', image)

        api.post('/readfile', data)
            .then(function (response) {
                alert(response.data.text)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    //todo: preview da imagem
    function handleImage(event) {
        if (!event.target.files) {
            return
        } else {
            // src = URL.createObjectURL(event.target.files[0])
        }
        setImage(event.target.files[0])
    }
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
                        {/* <label for="imgButton">
                            <img src="../images/image-icon.png" alt="img-icon" className="icon" />
                            <p>Selecione sua imagem</p>
                        </label> */}
                        <input onChange={handleImage} type="file" accept="image/*;capture=camera" id="imgButton" />

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
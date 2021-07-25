import { useState } from 'react'
import { Button } from 'react-bootstrap'
import api from 'axios'

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

function handleImage(event) {
if (!event.target.files) {
return
} else {
// src = URL.createObjectURL(event.target.files[0])
}
setImage(event.target.files[0])
}
return (
<div className="container">
    {/* todo:  Deveria ser replicado só né, fiz hardcodado mesmo */}
    <div className="header">
        <a href="/">
            <img src="../images/vacinow3.png" alt="vacinow-logo" className="logo" />
        </a>
        <hr />
    </div>

    <form onSubmit={handleSubmit}>
        <div>
            <h2>Fala upload do formulário scanneado: </h2>
            <label htmlFor="image" className="upload">Selecionar imagem</label>
            <input onChange={handleImage} type="file" accept="image/*;capture=camera" id="image"
                style={{ display: "none" }} />
            <Button type="submit" className="linkButton">Enviar</Button>
        </div>

    </form>
    <div>
        <h2>Ou então preencha o formulário diretamente: </h2>
        <Button href="/registration" className="linkButton">Preencher Formulário</Button>
    </div>
</div>
)
}
export default Upload
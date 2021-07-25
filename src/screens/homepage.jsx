import { Button } from 'react-bootstrap'

const Homepage = () => (
<div className="container" id="home">
    <div className="header">
        <a href="/">
            <img src="../images/vacinow3.png" alt="vacinow-logo"/>
        </a>
        <hr />
    </div>

    <div className="description">
        <h1 className="title">Cadastre uma vacina:</h1>
    </div>

    <div className="main">
        <div className="links">
            {/* botão de upload */}
            <h2 className="mainText">Faça upload do seu formulário scanneado</h2>
            {/* <Button className={styles.linkButton} href="/upload">Login</Button> */}
            <Button className="linkButton" href="/upload"> <img src="../images/upload-big-arrow.png" alt="upload-icon" className="icon"/><p>Upload</p></Button>

        </div>
        <div className="links">
            {/* botão de cadastro */}
            <h2 className="mainText"> Preencha o formulário online</h2>
            {/* <Button className={styles.linkButton} href="/upload">Login</Button> */}
            <Button style={{ marginTop: 52 }} className="linkButton" href="/registration"><img src="../images/contact-form.png" alt="form-icon" className="icon"/><p>Preencher</p> </Button>
        </div>
    </div>
</div>
)

export default Homepage
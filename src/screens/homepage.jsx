import { Button } from 'react-bootstrap'

const Homepage = () => (
<div className="container">
    <div className="header">
        <img src="./images/vacinow1.png" />
    </div>

    <div className="description">
        <h1 className="mainText">Cadastre uma vacina:</h1>
    </div>

    <div className="main">
        <div className="links">
            {/* botão de upload */}
            <h2 className="mainText">Faça upload do seu formulário scanneado</h2>
            {/* <Button className={styles.linkButton} href="/upload">Login</Button> */}
            <Button className="linkButton" href="/upload">Upload</Button>
            
        </div>
        <div> <p className="mainText"> OU </p> </div>
        <div className="links">
            {/* botão de cadastro  */}
            <h2 className="mainText"> Preencha o formulário online</h2>
            {/* <Button className={styles.linkButton} href="/upload">Login</Button> */}
            <Button style={{ marginTop: 52 }} className="linkButton" href="/registration">Preencher</Button>
        </div>
    </div>
</div>
)

export default Homepage
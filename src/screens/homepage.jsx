import "../styles/homepage.css";

const Homepage = () => (
  <div className="content" id="home">
      <header>
          <a href="/">
              <img src="../images/vacinow3.png" alt="vacinow-logo" />
          </a>
          <hr />
      </header>

      <div className="description">
          <h1 className="title">Cadastre uma vacina:</h1>
      </div>

      <main className="links">
          <div className="linkBox">
              <h1 className="mainText">Faça upload do seu formulário scanneado</h1>
              <button className="linkButton" onClick={()=>{window.location = "/upload"}}>
                  <img src="../images/upload-big-arrow.png" alt="upload-icon" className="icon" />
                  <p>Upload</p>
              </button>
          </div>
          <div className="linkBox">
              <h1 className="mainText"> Preencha o formulário online</h1>
              <button className="linkButton" onClick={()=>{window.location = "/registration"}}>
                  <img src="../images/contact-form.png" alt="form-icon" className="icon" />
                  <p>Preencher</p>{" "}
              </button>
          </div>
      </main>
  </div>
);

export default Homepage;

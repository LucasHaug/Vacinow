import React from "react";

const RegistrationForm = () => {
    return (
        <div className="container">
            <h1 className="title">Vacinow</h1>
            <form>
                <div className="row">
                    <div className="col">
                        <label className="form-label">Nome: </label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" />
                        <label className="form-label">Data aplicação: </label>
                        <input type="password" className="form-control" />
                        <label className="form-label">Local de aplicação: </label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="col">
                        <label className="form-label">Idade: </label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                        <label className="form-label">Nome da vacina: </label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" />
                        <label className="form-label">Laboratório: </label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="col">
                        <label className="form-label">CPF: </label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" />
                        <label className="form-label">Serviço de Saúde: </label>
                        <input type="password" className="form-control" />
                        <label className="form-label">Lote: </label>
                        <input type="password" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm
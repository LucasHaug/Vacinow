import { Button, Form, Col, Row } from 'react-bootstrap'
import stylesHome from './styles/homepage.module.css'
import stylesForm from './styles/registrationForms.module.css'
import Layout from "../components/Layout/Layout";

const RegistrationForm = () => (
    <Layout title="Registration Form">
        <div className={stylesHome.container}>
            <h1 className={stylesHome.title}>Vacinow</h1>
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
    </Layout>
)

export default RegistrationForm

import React, { Component } from "react";
import { uniqueId } from "lodash";
import filesize from "filesize";

import api from "axios";

import { Container, Content } from "./styles";

import Upload from "./Upload";
import FileList from "./FileList";
import FormTemplate from "../registrationForm/formTemplate"

var upload = {}
var responseForms
var responseFormsVdd = []

class uploadScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uploadedFiles: [],
            show: false
        }
    }

    handleUpload = files => {
        const uploadedFiles = files.map(file => ({
            file,
            id: uniqueId(),
            name: file.name,
            readableSize: filesize(file.size),
            preview: URL.createObjectURL(file),
            progress: 0,
            uploaded: false,
            error: false,
            url: null
        }));

        this.setState({
            uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
        });
        console.log(files[0])
        upload = files[0]
    };

    handleDelete = async id => {
        this.setState({
            uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id)
        });
        upload.pop()
    };

    componentWillUnmount() {
        this.state.uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
    }

    async handleSubmit(event) {
        event.preventDefault();

        if (!upload) {
            alert("Adicione um arquivo por favor")
            return
        }
        const data = new FormData()

        data.append('image', upload)

        alert("Estamos enviando seu forms")
        await api.post('https://api.vacinow.tk/readfile/', data)
            .then((response) => {
                console.log(response.data)
                responseForms = response.data
                this.setState({
                    show: true
                });
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    async handleSubmitForms() {
        // manda pelo axios
        responseForms.map((formVecSend) => {
            if (formVecSend.name === "" && formVecSend.age === "" && formVecSend.lab === "" && formVecSend.place === "" &&
            formVecSend.vaccine === "" && formVecSend.cpf === "" && formVecSend.date === "" && formVecSend.nsus === "" &&
            formVecSend.batch === "") {
                return
            } else {
                responseFormsVdd = [...responseFormsVdd,formVecSend]
            }
        })
        console.log("response", responseFormsVdd)
            await api.post('https://api.vacinow.tk/formsubmit/', responseFormsVdd)
                .then(function (response) {
                    console.log(response.data)
                    alert("Adicionado no servidor")
                })
                .catch(function (error) {
                    alert("Deu ruim", error)
                    console.log("erro",error)
                })
            responseFormsVdd=[]
        }

    formList() {
            console.log(responseForms)

        return responseForms.map((formVecSend) => {
                if (formVecSend.name === "" && formVecSend.age === "" && formVecSend.lab === "" && formVecSend.place === "" &&
                    formVecSend.vaccine === "" && formVecSend.cpf === "" && formVecSend.date === "" && formVecSend.nsus === "" &&
                    formVecSend.batch === "") {
                    return
                } else {
                    return <FormTemplate forms={formVecSend} key={formVecSend.id} />;
                }
            });
        }

    render() {
            const { uploadedFiles } = this.state;
            console.log(this.state.show)
        return this.state.show ? (
                <div className="content" id="upload">
                    <header>
                        <a href="/">
                            <img src="../images/vacinow3.png" alt="vacinow-logo" />
                        </a>
                        <hr />
                    </header>
                    <main>
                        {this.formList()}
                        <button
                            type="submit"
                            onClick={() => {
                                this.handleSubmitForms();
                            }}
                        >
                            <img src="../images/send.png" alt="minus icon" className="icon" />
                            <p>Submit</p>
                        </button>
                    </main>
                </div>
            ) : (
                <div className="content" id="upload">
                    <header>
                        <a href="/">
                            <img src="../images/vacinow3.png" alt="vacinow-logo" />
                        </a>
                        <hr />
                    </header>
                    <main>
                        <div className="description">
                            <h1>Faça upload do formulário scanneado: </h1>
                        </div>
                        <div className="upload">
                            <Container>
                                <Content>
                                    <form onSubmit={(event) => this.handleSubmit(event)}>
                                        <Upload onUpload={this.handleUpload} />
                                        {!!uploadedFiles.length && (
                                            <FileList files={uploadedFiles} onDelete={this.handleDelete} />
                                        )}
                                        <button type="submit" className="linkButton">
                                            <img src="../images/send.png" alt="send-icon" className="icon" />
                                            <p>Enviar</p>
                                        </button>
                                    </form>

                                    <h2>Ou então preencha o formulário diretamente: </h2>
                                    <button onClick={() => { window.location = "/registration" }} className="linkButton">
                                        <img src="../images/contact-form.png" alt="forms-icon" className="icon" />
                                        <p>Preencher Formulário</p>
                                    </button>
                                </Content>
                            </Container>
                        </div>
                    </main>
                </div>
            )
        }
}

    export default uploadScreen;
import React, { Component } from "react";
import { uniqueId } from "lodash";
import filesize from "filesize";

import api from "axios";

import { Container, Content } from "./styles";

import Upload from "./Upload";
import FileList from "./FileList";

var upload = {}

class uploadScreen extends Component {
    state = {
        uploadedFiles: []
    };

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

    handleSubmit(event) {
        event.preventDefault();
        console.log("oi", upload)
        
        if (!upload) {
            alert("Adicione um arquivo por favor")
            return
        }
        const data = new FormData()
        
        data.append('image', upload)
        
        console.log("data", data)
        api.post('https://api.vacinow.tk/readfile', data)
        .then(function (response) {
            alert(response.data.text)
        })
        .catch(function (error) {
            console.log(error)
        })
        // window.location = "/checkpage"
    }

    render() {
        const { uploadedFiles } = this.state;

        return (
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
                        <form onSubmit={this.handleSubmit}>
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
        );
    }
}

export default uploadScreen;
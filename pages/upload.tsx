import { ChangeEvent, FormEvent, useState } from "react";
import Layout from "../components/Layout";
import api from "../services/api";

const Upload = () => {

    const [image, setImage] = useState<File>();

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (!image) {
            return;
        }
        const data = new FormData();

        data.append('image', image)

        api.post('/readfile/', data)
        .then(function (response) {
            alert(response.data.text);
        })
        .catch(function (error) {
            console.log(error);
        });

    };

    function handleImage(event: ChangeEvent<HTMLInputElement>){
        if (!event.target.files){
            return;
        }
        setImage(event.target.files[0]);
    };

    return(
        <Layout title="Upload">
            <br/>
            <hr/>
            <form onSubmit={handleSubmit}>
                <div>
                    <input onChange={handleImage} type="file" accept="image/*;capture=camera" id="image"/>
                </div>
                <br/>
                <button type="submit">Enviar</button>
            </form>
        </Layout>
    );
}
export default Upload;

import Grid from "react-fast-grid";
import React,{useState} from "react";

import "../../styles/formTemplate.css";

const styles = {
    outer: {
        borderRadius: 5,
        boxShadow: "0 0px 10px #BBB",
    },
};

const Form = (props) => {
    const [name, setName] = useState(props.forms.name);
    const [date, setDate] = useState(props.forms.date);
    const [place, setPlace] = useState(props.forms.place);
    const [age, setAge] = useState(props.forms.age);
    const [vaccine, setVaccine] = useState(props.forms.vaccine);
    const [lab, setLab] = useState(props.forms.lab);
    const [cpf, setCpf] = useState(props.forms.cpf);
    const [nsus, setNsus] = useState(props.forms.nsus);
    const [batch, setBatch] = useState(props.forms.batch);

    function onChangeName(e){
        props.forms.name = e.target.value
    }
    function onChangeDate(e){
        props.forms.date = e.target.value
    }
    function onChangeLocal(e){
        props.forms.place = e.target.value
    }
    function onChangeAge(e){
        props.forms.age= e.target.value
    }
    function onChangeVaccine(e){
        props.forms.vaccine = e.target.value
    }
    function onChangeLab(e){
        props.forms.lab = e.target.value
    }
    function onChangeCPF(e){
        props.forms.cpf = e.target.value
    }
    function onChangeNsus(e){
        props.forms.nsus = e.target.value
    }
    function onChangeBatch(e){
        props.forms.batch = e.target.value
    }

    return (
        <form className="forms" style={styles.outer} key={props.forms.id}>
            <Grid container spacing={2} direction="row">
                <Grid container spacing={1} alignItems="center" justify="left">
                    <Grid item>
                        <div>Nome:</div>
                    </Grid>
                    <Grid item>
                        {name === "" ? <input type="text" id="fname" onChange={(e)=>onChangeName(e) } required/>
                        : <input type="text" id="fname" onFocus={(e)=>setName("") } value={name} required/>}
                    </Grid>
                    <Grid item>
                        <div>Data aplicação:</div>
                    </Grid>
                    <Grid item>
                        {date === "" ? <input type="text" id="fname" onChange={(e)=>onChangeDate(e)} required/>
                        : <input type="text" id="fname" onFocus={(e)=>setDate("") } value={date}required/>}
                    </Grid>
                    <Grid item>
                        <div>Local de aplicação:</div>
                    </Grid>
                    <Grid item>
                        {place === "" ? <input type="text" id="fname" onChange={(e)=>onChangeLocal(e)}required />
                        : <input type="text" id="fname" onFocus={(e)=>setPlace("") } value={place}required/>}
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" justify="left">
                    <Grid item>
                        <div>Idade:</div>
                    </Grid>
                    <Grid item>

                        {age === "" ? <input type="text" id="fname" onChange={(e)=>onChangeAge(e)} required/>
                        : <input type="text" id="fname" onFocus={(e)=>setAge("") } value={age}required/>}
                    </Grid>
                    <Grid item>
                        <div>Nome da vacina:</div>
                    </Grid>
                    <Grid item>
                        {vaccine === "" ? <input type="text" id="fname" onChange={(e)=>onChangeVaccine(e)} required/>
                        : <input type="text" id="fname" onFocus={(e)=>setVaccine("") } value={vaccine}required/>}
                    </Grid>
                    <Grid item>
                        <div>Laboratório:</div>
                    </Grid>
                    <Grid item>
                        {lab === "" ? <input type="text" id="fname" onChange={(e)=>onChangeLab(e)} required/>
                        : <input type="text" id="fname" onFocus={(e)=>setLab("") } value={lab}required/>}
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" justify="left">
                    <Grid item>
                        <div>CPF:</div>
                    </Grid>
                    <Grid item>
                        {cpf === "" ? <input type="text" id="fname" onChange={(e)=>onChangeCPF(e)} required/>
                        : <input type="text" id="fname" onFocus={(e)=>setCpf("") } value={cpf} required/>}
                    </Grid>
                    <Grid item>
                        <div>Serviço de Saúde:</div>
                    </Grid>
                    <Grid item>
                        {nsus === "" ? <input type="text" id="fname" onChange={(e)=>onChangeNsus(e)} required/>
                        : <input type="text" id="fname" onFocus={(e)=>setNsus("") } value={nsus} required/>}
                    </Grid>
                    <Grid item>
                        <div>Lote:</div>
                    </Grid>
                    <Grid item>
                        { batch === "" ? <input type="text" id="fname" onChange={(e)=>onChangeBatch(e)} required/>
                        : <input type="text" id="fname" onFocus={(e)=>setBatch("") } value={batch} required/>}
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
}

export default Form
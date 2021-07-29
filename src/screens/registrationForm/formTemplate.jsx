import React,{useState} from "react";
import Moment from "moment";
import "../../styles/formTemplate.css";

const styles = {
    outer: {
        borderRadius: 5,
        boxShadow: "0 0px 10px #BBB",
    },
};

var formated = false;
var formatted_date = "";

const Form = (props) => {
    var cpf_no_dots = props.forms.cpf.split('.').join("")
    var cpf_no_spaces = cpf_no_dots.split(' ').join("")
    var formatted_cpf = cpf_no_spaces.split('-').join("") 
    props.forms.cpf = formatted_cpf

    Moment.locale('pt-br')
    
    if (props.forms.date.length === 10 && formated === false) {
        formatted_date = new Moment(props.forms.date, "DD/MM/YYYY").format("YYYY-MM-DD")
        formated = true
    } 
    
    if (props.forms.date.length === 8 && formated === false) {
        formatted_date = new Moment(props.forms.date, "DD/MM/YY").format("YYYY-MM-DD")
        formated = true
    }
    
    props.forms.date = formatted_date

    var nsus_no_spaces = props.forms.nsus.split(' ').join("")
    props.forms.nsus = nsus_no_spaces
    
    const [name, setName] = useState(props.forms.name);
    const [date, setDate] = useState(props.forms.date);
    const [place, setPlace] = useState(props.forms.place);
    const [age, setAge] = useState(props.forms.age);
    const [vaccine, setVaccine] = useState(props.forms.vaccine);
    const [lab, setLab] = useState(props.forms.lab);
    const [cpf, setCpf] = useState(formatted_cpf);
    const [nsus, setNsus] = useState(nsus_no_spaces);
    const [batch, setBatch] = useState(props.forms.batch);

    function onChangeName(e){
        props.forms.name = e.target.value
    }
    function onChangeDate(e){
        if (e.target.value.length === 10) {
            formatted_date = new Moment(e.target.value, "DD/MM/YYYY").format("YYYY-MM-DD")
            formated = true
        } 
        
        if (e.target.value.length === 8) {
            formatted_date = new Moment(e.target.value, "DD/MM/YY").format("YYYY-MM-DD")
            formated = true
        }

        props.forms.date = formatted_date
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
            <div className="formCard">

                <div className="form-group">
                    <label>Nome</label>
                    {name === "" ? <input type="text" id="fname" onChange={(e)=>onChangeName(e) } required/>
                    : <input type="text" id="fname" onFocus={(e)=>setName("") } value={name} required/>}
                </div>

                <div className="form-group">
                    <label>Data de aplicação</label>
                    {date === "" ? <input type="text" id="fname" onChange={(e)=>onChangeDate(e)} required/>
                    : <input type="text" id="fname" onFocus={(e)=>setDate("") } value={date}required/>}
                </div>

                <div className="form-group">
                    <label>Local de aplicação</label>
                    {place === "" ? <input type="text" id="fname" onChange={(e)=>onChangeLocal(e)}required />
                    : <input type="text" id="fname" onFocus={(e)=>setPlace("") } value={place}required/>}
                </div>

                <div className="form-group">
                    <label>Idade</label>
                    {age === "" ? <input type="text" id="fname" onChange={(e)=>onChangeAge(e)} required/>
                    : <input type="text" id="fname" onFocus={(e)=>setAge("") } value={age}required/>}
                </div>

                <div className="form-group">
                    <label>Nome da vacina</label>
                    {vaccine === "" ? <input type="text" id="fname" onChange={(e)=>onChangeVaccine(e)} required/>
                    : <input type="text" id="fname" onFocus={(e)=>setVaccine("") } value={vaccine}required/>}
                </div>

                <div className="form-group">
                    <label>Laboratório</label>
                    {lab === "" ? <input type="text" id="fname" onChange={(e)=>onChangeLab(e)} required/>
                    : <input type="text" id="fname" onFocus={(e)=>setLab("") } value={lab}required/>}
                </div>

                <div className="form-group">
                    <label>CPF</label>
                    {cpf === "" ? <input type="text" id="fname" onChange={(e)=>onChangeCPF(e)} required/>
                    : <input type="text" id="fname" onFocus={(e)=>setCpf("") } value={cpf} required/>}
                </div>

                <div className="form-group">
                    <label>CNS</label>
                    {nsus === "" ? <input type="text" id="fname" onChange={(e)=>onChangeNsus(e)} required/>
                    : <input type="text" id="fname" onFocus={(e)=>setNsus("") } value={nsus} required/>}
                </div>

                <div className="form-group">
                    <label>Lote</label>
                    { batch === "" ? <input type="text" id="fname" onChange={(e)=>onChangeBatch(e)} required/>
                    : <input type="text" id="fname" onFocus={(e)=>setBatch("") } value={batch} required/>}
                </div>
            </div>

        </form>
    )
}

export default Form
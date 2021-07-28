import Grid from "react-fast-grid";


const styles = {
    outer: {
        borderRadius: 5,
        boxShadow: "0 0px 10px #BBB",
    },
};


const Form = (props) => {

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
    function onChangeNameShoot(e){
        props.forms.vaccine = e.target.value
    }
    function onChangeLab(e){
        props.forms.lab = e.target.value
    }
    function onChangeCPF(e){
        props.forms.cpf = e.target.value
    }
    function onChangeService(e){
        props.forms.nsus = e.target.value
    }
    function onChangeLote(e){
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
                        <input id="fname" onChange={onChangeName}/>
                    </Grid>
                    <Grid item>
                        <div>Data aplicação:</div>
                    </Grid>
                    <Grid item>
                        <input onChange={onChangeDate}/>
                    </Grid>
                    <Grid item>
                        <div>Local de aplicação:</div>
                    </Grid>
                    <Grid item>
                        <input onChange={onChangeLocal}/>
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" justify="left">
                    <Grid item>
                        <div>Idade:</div>
                    </Grid>
                    <Grid item>
                        <input onChange={onChangeAge}/>
                    </Grid>
                    <Grid item>
                        <div>Nome da vacina:</div>
                    </Grid>
                    <Grid item>
                        <input onChange={onChangeNameShoot}/>
                    </Grid>
                    <Grid item>
                        <div>Laboratório:</div>
                    </Grid>
                    <Grid item>
                        <input onChange={onChangeLab}/>
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" justify="left">
                    <Grid item>
                        <div>CPF:</div>
                    </Grid>
                    <Grid item>
                        <input onChange={onChangeCPF}/>
                    </Grid>
                    <Grid item>
                        <div>Serviço de Saúde:</div>
                    </Grid>
                    <Grid item>
                        <input onChange={onChangeService}/>
                    </Grid>
                    <Grid item>
                        <div>Lote:</div>
                    </Grid>
                    <Grid item>
                        <input onChange={onChangeLote}/>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
}

export default Form
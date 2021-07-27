import Grid from "react-fast-grid";


const styles = {
    outer: {
        borderRadius: 5,
        boxShadow: "0 0px 10px #BBB",
    },
};


const Form = (props) => {
    var forms = []
    var name = ""
    var id = props.forms

    function onChangeName(e){
        name = e.target.value
        // id = e.target.id
    }

    function handleCheck(e){
        forms = [...forms,[name,id]]
        console.log(forms)
        e.preventDefault();
    }

    props.submit("oi")
    return (
        <form className="forms" style={styles.outer}>
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
                        <input />
                    </Grid>
                    <Grid item>
                        <div>Local de aplicação:</div>
                    </Grid>
                    <Grid item>
                        <input />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" justify="left">
                    <Grid item>
                        <div>Idade:</div>
                    </Grid>
                    <Grid item>
                        <input />
                    </Grid>
                    <Grid item>
                        <div>Nome da vacina:</div>
                    </Grid>
                    <Grid item>
                        <input />
                    </Grid>
                    <Grid item>
                        <div>Laboratório:</div>
                    </Grid>
                    <Grid item>
                        <input />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" justify="left">
                    <Grid item>
                        <div>CPF:</div>
                    </Grid>
                    <Grid item>
                        <input />
                    </Grid>
                    <Grid item>
                        <div>Serviço de Saúde:</div>
                    </Grid>
                    <Grid item>
                        <input />
                    </Grid>
                    <Grid item>
                        <div>Lote:</div>
                    </Grid>
                    <Grid item>
                        <input />
                    </Grid>
                </Grid>
            </Grid>
            <button type="submit" onClick={(e)=> { handleCheck(e)}}>
                    <p>Check</p>
                </button>
        </form>
    )
}

export default Form
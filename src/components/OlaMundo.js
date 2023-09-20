import '../App.css';

export default function OlaMundo(){

    const estilo = {
        backgroundColor:'grey',
        color:'white',
        textAlign: 'right'
    }

    return(
        <>
            <p style={estilo}>Olá Mundo!</p>
            <p style={{color: 'red'}}>Recode Pro 2023</p>
        </>
    )
}

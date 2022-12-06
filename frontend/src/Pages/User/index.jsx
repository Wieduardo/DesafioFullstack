import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ContactsList from "../../Components/Contact_List";
import './style.css';

function User(){
    
    const params= useParams();

    return(
        <>
        <main className="main_login">
            <div className="conteudo">
            <h1 className="bemvindo">Sejis Bem-vindis!, {params.email}!</h1>
            <p>Fique a vontadis!</p>
            <Link to="/login"><button className="button_volta">Voltar</button></Link>
            <ContactsList/>
            </div>
        </main>
        </>
    );
}

export default User;
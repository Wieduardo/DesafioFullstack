import './style.css';
import LoginForm from "../../Components/Login_Form";

function Login(){

    return(
        <>
        <main className="main_home">
            <h1 className="h1">Faça seu Login!</h1>
            <LoginForm></LoginForm>
        </main>
        </>
    );
}

export default Login;
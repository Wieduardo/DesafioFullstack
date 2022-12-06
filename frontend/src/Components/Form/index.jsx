import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import './style.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { GlobalContext } from '../../Providers/global';

function Form(){

    const { userContext } = useContext(GlobalContext)

    const { userInfo, setUserInfo } = userContext

    /*const axiosConfig = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
    }*/

    const formScheme = yup.object().shape({
        name: yup.string().required("Nome Obrigatório"),
        email: yup.string().required("Email Obrigatório").email("Email Inválido"),
        phone: yup.string().required("Telefone Obrigatório"),
        password: yup.string().required("Senha Obrigatória").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, "Mínimo de 8 caracteres. Uma letra maiúscula. Uma letra minúscula e um caractere especial"),
        passwordCheck: yup.string().required("Senha Obrigatória").oneOf([yup.ref('password')], 'Senha diferente da fornecida'),
    
      })
    
      const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(formScheme)
      });
    
      const navigate = useNavigate();

      const onSubmitFunction = (data) => {

        delete data["passwordCheck"];

        setUserInfo(data)
        console.log(userInfo)
      
        axios.post('http://localhost:3000/users', data)
          .then((res) => {

            toast.success("Cadastro Efetuado com sucesso!");

            setTimeout(() => {
              navigate("/login");
            }, 1000);
          })
          .catch((err) => {
            toast.error("Algo deu Errado!");
            console.log(err);
          });
      };

    return(
        <>
        <form className='form' onSubmit={handleSubmit(onSubmitFunction)}>
          <div className='div_input'>
            <input placeholder='Nome de Usuário' {...register ("name", {maxLength: 60})}></input>
            {errors.name?.message}
          </div>
          <div className='div_input'>
            <input placeholder='Endereço de Email' {...register ("email")}></input>
            {errors.email?.message}
          </div>
          <div className='div_input'>
            <input placeholder='Telefone' {...register ("phone", {maxLength: 18})}></input>
            {errors.name?.message}
          </div>
          <div className='div_input'>
            <input className='inputSmall' placeholder='Senha' {...register ("password")}></input>
            {errors.password?.message}
          </div>
          <div className='div_input'>
            <input className='inputSmall' placeholder='Confirme sua Senha' {...register ("passwordCheck")}></input>
            {errors.passwordCheck?.message}
          </div>
            <button type='submit' className='button'>CADASTRAR</button>
        </form>
        </>
    )
}

export default Form;
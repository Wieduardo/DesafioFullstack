import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import './style.css';

function Form(){

    const formScheme = yup.object().shape({
        name: yup.string().required("Nome Obrigatório"),
        email: yup.string().required("Email Obrigatório").email("Email Inválido"),
        number: yup.string().required("Telefone Obrigatório"),
      })
    
      const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(formScheme)
      });
    
      const history = useNavigate();

      const onSubmitFunction = (data) => history.push(`/login/${data.name}`);

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
            <input placeholder='Telefone' {...register ("number", {maxLength: 18})}></input>
            {errors.name?.message}
          </div>
            <button type='submit' className='button'>CADASTRAR</button>
        </form>
        </>
    )
}

export default Form;
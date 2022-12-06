import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../../Providers/global';
import { toast } from 'react-toastify'
import axios from "axios"
import './style.css';

function LoginForm(){

      //
        const { userContext } = useContext(GlobalContext)
      
        const { renewToken } = userContext
      
        const schema = yup.object().shape({
          email: yup.string().email("Email invalido").required("Campo vazio"),
          password: yup.string().required("Campo vazio"),
        });
        
        const navigate = useNavigate();

        const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm({ resolver: yupResolver(schema), reValidateMode: "onSubmit" });
        
        const collectData = (data) => {
      
          axios.post("http://localhost:3000/users/login", data)
            .then((res) => {
              console.log(res.data.token)
              localStorage.setItem("token", res.data.token);
              userContext.setUserToken(res.data.token)
              renewToken(data)
              setTimeout(() => {
                navigate(`/user/${data.email}`);
              }, 1000);
            })
            .catch((err) => {
              toast.error("Email ou senha incorretos!")
            });
        };
      

      //
    return(
        <>
        <form className='form' onSubmit={handleSubmit(collectData)}>
          <div className='div_input'>
          <input className='inputSmall'
            placeholder="Email"
            {...register("email")}
            autoComplete="off"
          />
          {errors.email && (
            <span className="email-error">{errors.email.message}</span>
          )}
          </div>
          <div className='div_input'>
            <input className='inputSmall'
              placeholder="Senha"
              {...register("password")}
              autoComplete="off"
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
        <button className='button'>Login</button>
      </form>
        </>
    )
}

export default LoginForm;
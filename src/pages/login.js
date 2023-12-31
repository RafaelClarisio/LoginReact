import React from 'react';
import Button from '../components/Buttons'
import Input from '../components/Input'
import Label from '../components/Labels'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


import '../styles/LoginForm.css'



const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
      Cookies.remove('token')
      navigate('/');
    }
    

  return (
    <section className="login">
      <form className="cont__form__login" >
        <Label text="@Logado com sucesso!" id="login__label__password" tipo="titulo" />
        <div className="cont__column">
          <Input type="text" id="login__name" />
          <Label text="Nome" id="login__label__password" tipo="padrao" />
          <Button text="LOGOUT" type="submit" onClick={handleSubmit}/>

        </div>
      </form>
    </section>
  );
};
export default Login;

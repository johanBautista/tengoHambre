import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const Boton = styled.button`
  width: 100%;
  background: #419d78;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 10px;
  border: none;
  color: #fff;
  margin: 3rem 0 3rem 0;
  padding: 1rem 2rem;
  box-shadow: 0px 5px 9px -5px #000;
`;

const Input = styled.input`
  width: 100%;
  display: block;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid #007cad;
`;

const Titulo = styled.h1`
  font-size: 5rem;
  color: #55514e;
  font-family: 'Raleway', sans-serif;
  padding: 20px;
`;

const Form = styled.form`
  padding: 20px;
`;

//
const Login = () => {
  //state para iniciar sesion
  const [usuario, guardarUsuario] = useState({
    nombre: '',
    password: '',
  });

  // obtener info
  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  //extraer de usuario
  const { nombre, password } = usuario;

  // inicio de sesion
  const onSubmit = (e) => {
    e.preventDefault();
    //validaciones
    //pasar info action
  };

  return (
    <Contenedor>
      <Titulo>Listo para una reserva?</Titulo>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Tu nombre"
          value={nombre}
          onChange={onChange}
        />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Tu password"
          value={password}
          onChange={onChange}
        />

        <Boton type="submit">ENTRAR</Boton>
      </Form>

      <Link to={'/nueva-cuenta'} className="enlace-cuenta">
        Obtener Cuenta
      </Link>
    </Contenedor>
  );
};

export default Login;

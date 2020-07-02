import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Boton = styled.button`
  width: 100%;
  background: #419d78;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin: 3rem 0 3rem 0;
  padding: 1rem 2rem;
  font-size: 2rem;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 5px 9px -5px #000;
  transition: background-size 1s ease;
  &:hover {
    background-size: 400px;
    cursor: pointer;
  }
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
  width: 80%;
  padding: 10px;
`;
const Login = () => {
  return (
    <Contenedor>
      <Titulo>Listo para una reserva?</Titulo>
      <Form action="">
        <Input type="text" placeholder="nombre" />
        <Input type="text" placeholder="password" />

        <Boton type="button">Entra!</Boton>
      </Form>

      
    </Contenedor>
  );
};

export default Login;

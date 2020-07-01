import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: #eca400;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 2rem;
  font-size: 2rem;
  border-radius: 10px;
  border: none;
  box-shadow: 2px 6px 5px 0px #000;
  transition: background-size 1s ease;
  &:hover {
    background-size: 400px;
    cursor: pointer;
  }
`;

const Titulo = styled.h1`
  font-size: 5rem;
  color: #CEC7D1;
  font-family: 'Raleway', sans-serif;
  justify-content: center;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const Login = () => {
  return (
    <Contenedor>
      <Titulo>Listo para una reserva?</Titulo>
      <form action="">
        <input type="text" placeholder="nombre" />
        <br />
        <input type="text" placeholder="password" />
        <br />
        <Boton type="button">Entra!</Boton>
      </form>
    </Contenedor>
  );
};

export default Login;

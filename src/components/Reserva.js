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

const Reserva = () => {
  return (
    <Contenedor>
      <Titulo>Realiza tu reserva</Titulo>
      <Form action="">
        <Input type="text" placeholder="Nombre" />
        <Input type="text" placeholder="Telefono" />
        <Input type="date" placeholder="Fecha" />
        <Input type="text" placeholder="Hora" />
        <Input type="text" placeholder="# Personas" />
        <Input type="text" placeholder="Evento" />

        <Boton>Reservar</Boton>
      </Form>
    </Contenedor>
  );
};

export default Reserva;

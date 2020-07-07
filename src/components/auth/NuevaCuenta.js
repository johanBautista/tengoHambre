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
  padding: 20px;
`;

const Error = styled.div`
  background-color: #f45d52;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const NuevaCuenta = () => {
  //state para iniciar sesion
  const [usuario, guardarUsuario] = useState({
    nombre: '',
    telefono: '',
    password: '',
    confirmar: '',
  });

  const [error, guardarError] = useState(false);

  //extraer de usuario
  const { nombre, telefono, password, confirmar } = usuario;

  // obtener info
  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  // inicio de sesion
  const onSubmit = (e) => {
    e.preventDefault();
    //validaciones
    if (
      nombre.trim() === '' ||
      telefono.trim() === '' ||
      password.trim() === '' ||
      confirmar.trim() === ''
    ) {
      guardarError(true);
      return;
    }
    guardarError(false);
    // passwords iguales
    //pasar info action
  };

  return (
    <Contenedor>
      <Titulo> Crea tu cuenta</Titulo>
      <Form onSubmit={onSubmit}>
        {error ? <Error>Todos los campos son obligatorios</Error> : null}

        <Input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Tu nombre"
          value={nombre}
          onChange={onChange}
        />
        <Input
          type="number"
          id="telefono"
          name="telefono"
          placeholder="Tu telefono"
          value={telefono}
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
        <Input
          type="password"
          id="confirmar"
          name="confirmar"
          placeholder="Repite tu password"
          value={confirmar}
          onChange={onChange}
        />
        <Boton>REGISTRARME</Boton>
      </Form>
      <Link to={'/'} className="enlace-cuenta">
        Iniciar Sesion
      </Link>
    </Contenedor>
  );
};

export default NuevaCuenta;

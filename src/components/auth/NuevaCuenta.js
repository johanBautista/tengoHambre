import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const NuevaCuenta = () => {
  return (
    <Contenedor>
      <h1> Crea tu cuenta</h1>
      <form action="">
        <input type="text" placeholder="nombre" />
        <br />
        <input type="text" placeholder="password" />
        <br />
        <input type="button" value="entrar" />
      </form>
    </Contenedor>
  );
};

export default NuevaCuenta;

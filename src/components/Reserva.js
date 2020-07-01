import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Reserva = () => {
  return (
    <Contenedor>
      <h1>Realiza tu reserva</h1>
      <p>// formulario de reserva</p>
      <form action="">
        <input type="text" placeholder="nombre" />
        <br />
        <input type="text" placeholder="telefono" />
        <br />
        <input type="date" placeholder="fecha" />
        <br />
        <input type="text" placeholder="hora" />
        <br />
        <input type="text" placeholder="numero peronas" />
        <br />
        <input type="text" placeholder="evento" />
        <br />
        <input type="button" value="entrar" />
      </form>
    </Contenedor>
  );
};

export default Reserva;

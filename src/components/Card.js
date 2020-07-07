import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Reserva = styled.div`
  width: 80%;
  font-family: Arial, Helvetica, sans-serif;
  color: #55514e;
  margin: 15px 0;
  padding: 15px;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 5px 9px -5px #000;
  transition: background-size 1s ease;
  display: flex;
  justify-content: space-around;
  &:hover {
    background-size: 400px;
    cursor: pointer;
  }
`;

const Card = () => {
  return (
    // <Contenedor>
      <Reserva>
        <div>
          <p>Maria Fernandez</p>
          <p>cena</p>
          <p>3 pax</p>
        </div>
        <div>
          <p>10-07-85</p>
          <p>20:00h</p>
          <p>627 58 39 02</p>
        </div>
      </Reserva>
    // </Contenedor>
  );
};

export default Card;

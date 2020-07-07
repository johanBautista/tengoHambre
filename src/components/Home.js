import React from 'react';
import styled from '@emotion/styled';

import Login from './auth/Login';
import Card from './Card';

const Titulo = styled.h4`
  font-size: 2rem;
  color: #55514e;
  font-family: 'Raleway', sans-serif;
  padding: 20px;
  /* display:block; */
`;

const Home = () => {
  return (
    <div>
      <Login />
      {/* <Titulo>Tablero de reservas!!</Titulo> */}
      {/* <Card /> */}
    </div>
  );
};

export default Home;

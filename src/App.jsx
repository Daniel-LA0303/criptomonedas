import { useState } from 'react'
import styled from '@emotion/styled'
import imagen from './img/cryptomonedas.png'

import Formulario from './components/Formualrio';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width:990px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
`;
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;
const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive, sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;


function App() {
  

  return (
    <Contenedor>
       <Imagen 
          src={imagen}
          alt='imagen crypto'
        />
        <div>
          <Heading>Cotiza Criptomonedas al instante</Heading>
          <Formulario></Formulario>
        </div>
      
    </Contenedor>
  )
}

export default App

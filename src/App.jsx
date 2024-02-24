import styled from '@emotion/styled'
import { useState } from 'react'
import ImagenCrypto from "./img/imagen-criptos.png"
import Formulario from './components/Formulario'


const Contenedor = styled.div`
max-width: 900px;
margin: 0 auto;
@media (min-width: 992px){
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap:2rem
}
`
const Imagen = styled.img`
max-width:400px;
width:80%;
margin: 100px auto 0 auto;
display:block;
`
const Heading = styled.h1`
color: #F5F5F5;
font-weight:700;
font-size: 34px;
margin-top: 80px;
margin-bottom: 50px;
text-align: center;

&::after {

content:'';

align-items:center;
width: 100px;
height: 6px;
background-color: #66A2FE;
display:block;
margin: 10px auto 0 auto;
}
`

function App() {

  return (
    <>
    <Contenedor>
      <Imagen
      src={ImagenCrypto}
      alt='Imagen criptos'
      />
      <div>
        <Heading>Calculadora de criptomonedas</Heading>
        <Formulario/>
      </div>
    </Contenedor>
    </>
  )
}

export default App

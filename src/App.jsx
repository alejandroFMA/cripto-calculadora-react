import styled from '@emotion/styled'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ImagenCrypto from "./img/imagen-criptos.png"
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'
import './styles/spinner.css'


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

  const [monedas, setMonedas] = useState({})
  const [resultados, setResultados] =useState({})
  const [cargando, setCargando] = useState(false)


  useEffect(() => {
    const fetchData = async () => {

      if (Object.keys(monedas).length > 0) {
      try {
        setCargando(true)
        setResultados({})
       const  {criptomoneda, moneda} = monedas
        const respuesta = await axios.get(
          `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        );
        const datos = respuesta.data;
  
      setResultados(datos.DISPLAY[criptomoneda][moneda])
      setCargando(false)
      
      } catch (error) {
        console.error("Error fetching data: ", error.message);
      }
    };
  }
  
    fetchData();
  }, [monedas]);

  return (
    <>
    <Contenedor>
      <Imagen
      src={ImagenCrypto}
      alt='Imagen criptos'
      />
      <div>
        <Heading>Calculadora de criptomonedas</Heading>
        <Formulario
        setMonedas={setMonedas}/>
        {cargando && <Spinner/>}
        {resultados.PRICE && <Resultado
        resultados={resultados}         
        />}
      </div>
    </Contenedor>
    </>
  )
}

export default App

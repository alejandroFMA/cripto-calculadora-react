import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import {monedas} from "../data/monedas"

const InputSubmit = styled.input`
background-color: #9497FF;
border: none;
width: 100%;
padding: 10px;
color: #F5F5F5;
font-weight: 700;
text-transform: uppercase;
font-size: 20px;
border-radius: 5px;
transition: background-color .3s ease;
margin-top: 30px;
cursor: pointer;

&:hover{
    background-color: #7A7DFE;
    
}
`

function Formulario() {


 const [cryptos, setCryptos] = useState([])
  const [SelectMonedas, moneda] = useSelectMonedas('Elige tu moneda', monedas)
  const [SelectCriptomonedas, criptomoneda] = useSelectMonedas('Elige tu criptomoneda', cryptos)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respuesta = await axios.get("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD");
        const datos = respuesta.data.Data

        const arrayCriptos = datos.map(dato => {
          
          const objeto={
            id: dato.CoinInfo.Name,
            nombre: dato.CoinInfo.FullName,
           
          }
          return objeto
         });

         setCryptos(arrayCriptos)
      } catch (error) {
        console.error("Error fetching data: ", error.message);
      }
    };

    fetchData();
  }, []); 
  


  return (
    <>
    <form>
     <SelectMonedas/>
     <SelectCriptomonedas/>
        <InputSubmit 
        type="submit" 
        value="Cotizar"/>     
    </form>
    </>
  )
}

export default Formulario

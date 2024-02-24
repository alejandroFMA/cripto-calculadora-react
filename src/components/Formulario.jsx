import React, { useEffect, useState } from "react";
import Error from "./Error";
import axios from "axios";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #f5f5f5;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  cursor: pointer;

  &:hover {
    background-color: #7a7dfe;
  }
`;

function Formulario({setMonedas}) {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);
  const [SelectMonedas, moneda] = useSelectMonedas("Elige tu moneda", monedas);
  const [SelectCriptomonedas, criptomoneda] = useSelectMonedas(
    "Elige tu criptomoneda",
    cryptos
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respuesta = await axios.get(
          "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
        );
        const datos = respuesta.data.Data;

        const arrayCriptos = datos.map((dato) => {
          const objeto = {
            id: dato.CoinInfo.Name,
            nombre: dato.CoinInfo.FullName,
          };
          return objeto;
        });

        setCryptos(arrayCriptos);
      } catch (error) {
        console.error("Error fetching data: ", error.message);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!moneda || !criptomoneda) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }
    setError(false);
    setMonedas({
      moneda,
      criptomoneda
    })
  };

  return (
    <>
      {error && <Error>Todos los campos son necesarios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptomonedas />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
}

export default Formulario;

import styled from "@emotion/styled"

const Resultados = styled.div`
background-color:#F5F5F5;
border-radius: 10px;
margin-top: 20px;
padding:8px 16px;
display: flex;
align-items: start;
gap: 2rem;

`


const Imagen = styled.img`
    display: block;
    width: 120px;

`


const Texto = styled.p`
font-size: 20px;
    span {
        font-weight: 700;
    }

`

const Precio = styled.p`
font-size: 26px;
    span {
        font-weight: 700;
    }

`

const Resultado = ({resultados}) => {

const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR,IMAGEURL, LASTUPDATE } = resultados;
 
  return (
    <Resultados>
        <Imagen 
        src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen criptomoneda" />  
        <div> 
        <Precio>El precio es de <span>{PRICE}</span></Precio>
        <Texto>Precio más alto del día <span>{HIGHDAY}</span></Texto>
        <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
        <Texto>Cambios últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>   
        </div> 
            
    </Resultados>
  )
}

export default Resultado

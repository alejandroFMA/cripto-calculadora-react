import styled from '@emotion/styled'

const Texto = styled.div`
background-color: #B7322C;
color: aliceblue;
font-size: 20px;
text-transform: uppercase;
padding: 10px;
text-align: center;
font-weight: 700;
border-radius: 10px;
`

const Error = ({children}) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error

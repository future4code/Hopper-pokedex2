import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: space-around;
`;

export const ContainerCard = styled.div`
    display:flex;
    justify-content: space-around;
    flex-wrap:wrap;
    padding:3em;
    section{
        margin:1em;
        min-width:calc(20% - 4em);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow:0 1px 10px 3px #666;
        border-radius: 5%;
    }
`;


export const Imagem = styled.img`
    height: 100px;
    margin: 3px;
`

export const BoxBotao = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 3px;
    width: 100%;    
`

export const Botao = styled.button`
  background-color: rgb(255, 255, 255, 0.5);
  border: 2px solid #e74c3c;
  border-radius: 0.6em;
  color: #1C1C1C;
  cursor: pointer;
  font-size: 0.7rem;
  padding: 0.2em 0.2em;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  transition: 300ms ease-in-out;
:hover, :focus {
  color: #fff;
  box-shadow: 0 0 40px 40px #e74c3c inset;
}

`
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: nowrap;
    gap: 1em;
    margin: 5px 0;
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 2px solid gray;
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
/* border-radius: 5%;
border: 0.05em solid grey;
padding: 3px;
cursor: pointer;
    transition:0.3s linear;
    &:hover{
        transform:scale(1.05); */

        box-sizing: border-box;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: transparent;
  border: 2px solid #e74c3c;
  border-radius: 0.6em;
  color: #1C1C1C;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-self: center;
      -ms-flex-item-align: center;
          align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;

  padding: 0.2em 0.4em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;

  -webkit-transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
:hover, :focus {
  color: #fff;
  outline: 0;
  box-shadow: 0 0 40px 40px #e74c3c inset;
}

`
import styled from "styled-components"
import imgTop from "./assets/img-top.jpg"
import { createGlobalStyle } from "styled-components";
import imgFundo from "./assets/fundo-transparente.png"

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  body {
    width: 100%;
    height: 100vh;
  }
`

export const Cabecalho = styled.div`
    background-image: url(${imgTop});
    background-color: black;
    background-size: 100%;
    height: 150px;
    width: 100%;
    background-repeat: no-repeat;
`

export const Fundo = styled.div`
    background-image: url(${imgFundo});
    background-size: 150px;
    height: calc(100vh - 150px);
    width: 100%;
`

import styled from "styled-components"
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

export const Fundo = styled.div`
    background-image: url(${imgFundo});
    background-size: 150px;
    min-height: 100vh;
    width: 100%;
`

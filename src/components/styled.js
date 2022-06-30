import styled from 'styled-components'
import imgTop from "../assets/img-top.jpg"

export const Cabecalho = styled.div`
    background-image: url(${imgTop});
    background-color: black;
    background-repeat: no-repeat;
    background-position:center;
    height: 8em;
    width: 100%;
    display:flex;
    align-items:center;

    img{
        width:8em;
        padding:1em;
        margin-left:3em;
        cursor:pointer;
        transition:0.3s linear;
        &:hover{
            transform:scale(1.2)
        }
    }
`

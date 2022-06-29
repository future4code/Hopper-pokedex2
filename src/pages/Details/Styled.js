import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
    width: 90vw;
    border: 2px solid;
    align-itens: center;
`
export const PokemonBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: 2px solid;
    img{
        height: 400px;
    }
    div{
        display: flex;
        justify-content: center; 
        width: 100%;
        margin: 5px 10px
    }
`
export const StatusBox = styled.div`
    display: flex;
`
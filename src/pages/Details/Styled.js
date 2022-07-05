import styled from "styled-components";

export const ContainerMain = styled.main`
    display: flex;
    flex-direction: column;
    width: 100vw;
`

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
`

export const PokemonBox = styled.div`
    background-color: rgb(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: 2px solid gray;
    img{
        height: 200px;
    }
    div{
        display: flex;
        justify-content: center;
         
        width: 100%;
        margin: 5px 10px
    }
`

export const PoderesBox = styled.div`
    background-color: rgb(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 2px solid gray;
    padding: 5px;
`
export const StatusBox = styled.div`
    display: flex;
`
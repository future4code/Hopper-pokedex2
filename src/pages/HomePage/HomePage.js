import React from 'react'
import pokemon from '../../assets/pokemon.png'
import {Container, Imagem, Botao, BoxBotao} from './Styled'

const HomePage = () => {


    return (
        <Container>
        <section>
            <Imagem src={pokemon} alt='imgpokemon' />
            <BoxBotao>
                <Botao>Pegar</Botao>
                <Botao>Detalhes</Botao>
            </BoxBotao>
        </section>
        <section>
            <Imagem src={pokemon} alt='imgpokemon' />
            <BoxBotao>
                <Botao>Pegar</Botao>
                <Botao>Detalhes</Botao>
            </BoxBotao>
        </section>
        <section>
            <Imagem src={pokemon} alt='imgpokemon' />
            <BoxBotao>
                <Botao>Pegar</Botao>
                <Botao>Detalhes</Botao>
            </BoxBotao>
        </section>
        <section>
            <Imagem src={pokemon} alt='imgpokemon' />
            <BoxBotao>
                <Botao>Pegar</Botao>
                <Botao>Detalhes</Botao>
            </BoxBotao>
        </section>
        <section>
            <Imagem src={pokemon} alt='imgpokemon' />
            <BoxBotao>
                <Botao>Pegar</Botao>
                <Botao>Detalhes</Botao>
            </BoxBotao>
        </section>
        </Container>
    )
}

export default HomePage
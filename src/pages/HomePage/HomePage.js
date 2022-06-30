import React from 'react'
import pokemon from '../../assets/pokemon.png'
import {Container, ContainerCard, Imagem, Botao, BoxBotao} from './Styled'
import Header from '../../components/Header'
import Logo from '../../assets/Logo.png'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

    const navigate = useNavigate()

    return (
        <Container>
            <Header voltar={() => navigate("/pokedex")} logo={Logo}/>
            <ContainerCard>

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
            </ContainerCard>
        </Container>
    )
}

export default HomePage
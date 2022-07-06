import React from 'react'
// import pokemon from '../../assets/pokemon.png'
import { Container, ContainerCard, Imagem, Botao, BoxBotao, BoxCard } from './Styled'
import Header from '../../components/Header'
import Logo from '../../assets/Logo.png'
import { useNavigate } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'

const HomePage = () => {

    const navigate = useNavigate()

    const { data } = useRequestData()
    console.log(data)
    return (
        <Container>
            <Header voltar={() => navigate("/pokedex")} logo={Logo} />
            <ContainerCard>


                <BoxCard >
                    {data && data.map((pokemon) => {
                        return (
                            <section key={pokemon.id}>

                                <Imagem src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt='imgpokemon' />

                                <p>{pokemon.name}</p>

                                <BoxBotao>
                                    <Botao>Pegar</Botao>
                                    <Botao onClick={() => navigate("/pokemon/pokemon")}>Detalhes</Botao>
                                </BoxBotao>
                            </section>

                        )
                    })}
                </BoxCard>
                {/* <section>
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
                </section> */}
            </ContainerCard>
        </Container>
    )
}

export default HomePage
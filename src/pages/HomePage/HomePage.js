import React, { useEffect, useState } from 'react'
import { Container, ContainerCard, Imagem, Botao, BoxBotao, BoxCard } from './Styled'
import Header from '../../components/Header'
import Logo from '../../assets/Logo.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const HomePage = () => {

    const navigate = useNavigate()

    const [data, setData] = useState({})

    useEffect (() => {
        getData()

    }, [])
    const url = "https://pokeapi.co/api/v2/pokemon/34"

    const getData = () => {
        axios.get(url)
        .then((response) => {
            setData(response.data)
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error.response)
        })
    }

    return (
        
        <Container>
            <Header voltar={() => navigate("/pokedex")} logo={Logo} />
            <ContainerCard>


                <BoxCard >
                    {data && data.sprites && 
                            <section key={data.id}>

                                <Imagem src={data.sprites.other.dream_world.front_default} alt='imgpokemon' />

                                <p>{data.name}</p>

                                <BoxBotao>
                                    <Botao>Pegar</Botao>
                                    <Botao onClick={() => navigate("/pokemon/pokemon")}>Detalhes</Botao>
                                </BoxBotao>
                            </section>

                        
                    }
                </BoxCard>

            </ContainerCard>
        </Container>
    )
}

export default HomePage
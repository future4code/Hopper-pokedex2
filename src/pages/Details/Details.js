import React from 'react'
import { useNavigate } from 'react-router-dom'
import pokemon from '../../assets/pokemon.png'
import { Container, ContainerMain, PokemonBox, PoderesBox } from './Styled'
import Header from '../../components/Header'
import LogoHome from '../../assets/LogoHome.png'

const Details = () => {

  const navigate = useNavigate()
  return (
    <ContainerMain>
        <Header voltar={() => navigate("/")} logo={LogoHome}/>
      <Container>
        <PokemonBox>
          <img src={pokemon} alt="Pokemon" />
          <div>
            <h4>Nome: </h4>
            <p>Ditto</p>
          </div>
          <div>
            <h4>Tipo:</h4>
            <p>Normal</p>
          </div>
        </PokemonBox>

        <PoderesBox>
          <h2>Poderes</h2>
          <p>HP:</p>
          <p>Ataque:</p>
          <p>Defesa:</p>
          <p>Ataque Especial:</p>
          <p>Defesa Especial:</p>
          <p>Velocidade:</p>
        </PoderesBox>

        <PoderesBox>
          <h2>Principais Ataques</h2>
          <p>Ataque 1</p>
          <p>Ataque 2</p>
          <p>Ataque 3</p>
          <p>Ataque 4</p>
          <p>Ataque 5</p>
        </PoderesBox>
      </Container>

    </ContainerMain>

  )
}

export default Details
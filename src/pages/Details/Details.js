import React from 'react'
import pokemon from '../../assets/pokemon.png'
import {Container, PokemonBox} from './Styled'

const Details = () => {
  return (
    <Container>
      <PokemonBox> 
        <img src={pokemon} />
          <div>
            <h4>Nome: </h4>
            <p>Ditto</p>
          </div>
          <div>
            <h4>Tipo:</h4>
            <p>Normal</p>          
          </div> 
      </PokemonBox>      
      
      <div>
        <h2>Poderes</h2>
        <p>HP:</p>
        <p>Ataque:</p>
        <p>Defesa:</p>
        <p>Ataque Especial</p>
        <p>Defesa Especial</p>
        <p>Velocidade</p>
      </div>

      <div>
        <h2>Principais Ataques</h2>
        <p>Ataque 1</p>
        <p>Ataque 2</p>
        <p>Ataque 3</p>
        <p>Ataque 4</p>
        <p>Ataque 5</p>
      </div>     
          
    </Container>
    
  )
}

export default Details
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, ContainerMain, PokemonBox, PoderesBox } from './Styled'
import Header from '../../components/Header'
import LogoHome from '../../assets/LogoHome.png'
import { URL_Img, URL_List } from '../../constants/urls'
import axios from 'axios'

const Details = () => {

  const navigate = useNavigate()
  const { id, name } = useParams()
  const nome = name[0].toUpperCase() + name.substring(1)
  const detail = id
  const [data, setData] = useState({})

  useEffect(() => {
    detailsName(detail)
  }, [])

  const detailsName = (id) => {
    axios.get(URL_List + id)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        alert(error.response)
      })
  }

  return (
    <ContainerMain>
      <Header voltar={() => navigate("/")} logo={LogoHome} />
      {
        data && data.sprites &&
        <Container>

          <PokemonBox>
            <img src={URL_Img + detail + '.png'} alt="Pokemon" />
            <div>
              <h5>Nome:&nbsp;</h5>
              <p>{nome}</p>
            </div>
            <div>
              <h5>Tipo:&nbsp;</h5>
              {data.types.map((tipo) => (
              <p key={tipo.type.name}>&nbsp;- {tipo.type.name[0].toUpperCase()+tipo.type.name.substring(1)}</p>
              ))}
            </div>
          </PokemonBox>

          <PoderesBox>
            <h2>Poderes</h2>
            <p>HP:&nbsp;{data.stats[0].base_stat}</p>            
            <p>Ataque:&nbsp;{data.stats[1].base_stat}</p>
            <p>Defesa:&nbsp;{data.stats[2].base_stat}</p>
            <p>Ataque Especial:&nbsp;{data.stats[3].base_stat}</p>
            <p>Defesa Especial:&nbsp;{data.stats[4].base_stat}</p>
            <p>Velocidade:&nbsp;{data.stats[5].base_stat}</p>
          </PoderesBox>

          <PoderesBox>
            <h2>Principais Ataques</h2>                       
              {data.moves.map((poder, index) => {
                return (
                index < 6 && <p key={poder.move.name}>{poder.move.name[0].toUpperCase()+poder.move.name.substring(1)}</p>

              )}
              )}

          </PoderesBox>
        </Container>
      }


    </ContainerMain >

  )
}

export default Details
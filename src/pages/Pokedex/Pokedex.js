import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import LogoHome from '../../assets/LogoHome.png'

const Pokedex = () => {

  const navigate = useNavigate()

  return (
    <div>
        <Header voltar={() => navigate("/")} logo={LogoHome}/>
    </div>
  )
}

export default Pokedex
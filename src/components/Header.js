import React from 'react'
import { Cabecalho } from '../Styled'
import pokedex from '../assets/pokedex.webp'
// import { useNavigate } from 'react-router-dom'
import {ImgBotao} from './styled'

const Header = () => {

    // const navigate = useNavigate()

    return (
        <Cabecalho>
            <button>
                <ImgBotao
                    src={pokedex}
                    // onClick={() => navigate("/")}
                    alt="Minha Pokedex" />
            </button>
        </Cabecalho>
    )
}

export default Header
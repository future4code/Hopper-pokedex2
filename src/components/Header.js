import React from 'react'
import { Cabecalho} from './Styled'

const Header = ({voltar, logo}) => {

    return (
        <Cabecalho>
            <img onClick={voltar} src={logo} alt="Logotipo da pagina"/>
        </Cabecalho>
    )
}

export default Header
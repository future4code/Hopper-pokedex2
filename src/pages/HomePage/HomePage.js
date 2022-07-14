import { Container, ContainerCard, Imagem, Botao, BoxBotao, BoxCard } from './Styled'
import Header from '../../components/Header'
import Logo from '../../assets/Logo.png'
import { useNavigate } from 'react-router-dom'
import { URL_Img } from '../../constants/urls'
import { useRequestData } from '../../hooks/useRequestData'

const HomePage = () => {

    const navigate = useNavigate()
    const { data, isLoading } = useRequestData()

    return (
        
        <Container>
            <Header voltar={() => navigate("/pokedex")} logo={Logo} />
            <ContainerCard>
                    {
                        isLoading 
                        ? (<p>Carregando...</p>)
                        : data && data.map(pokemon => (
                            <BoxCard key={pokemon.id}>
                                <Imagem src={URL_Img + pokemon.id + ".png"} alt={`imagem do pokemon ${pokemon.name}`}/>
                                <h3>{pokemon.name && pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h3>
                                <BoxBotao>
                                    <Botao>Capturar</Botao>
                                    <Botao onClick={() => navigate("/details/" + pokemon.id + "/" + pokemon.name)}>Detalhes</Botao>
                                </BoxBotao>
                            </BoxCard>
                        )) 
                    }
            </ContainerCard>
        </Container>
    )
}
export default HomePage;

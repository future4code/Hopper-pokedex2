import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL_List } from '../constants/urls'

export const useRequestData = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        pegaPokemon()
    },[])

    const pegaPokemon = () => {
        let pokemons = []
        setIsLoading(true)
        axios.get(URL_List + '?limit=40&offset=0')
        .then((response) => {
            const resposta = response.data.results
            const urlPokemon = resposta.map(poke => poke.url)
            for (const url of urlPokemon) {
                axios.get(url)
                .then((response) => {
                    pokemons.push(response.data)
                    setData(pokemons)
                    setTimeout(() => {
                        setIsLoading(false)
                    }, 1500)
            })}
        }).catch((error) => {
            alert(error.response)
        })
    }
    return { data, isLoading }
}

import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = () => {
    const [data, setData] = useState([])

    useEffect (() => {
        const url = `https://pokeapi.co/api/v2/pokemon/2/`

        axios.get(url)
        .then((response) => {
            setData(response.data)
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error.response)
        })
    }, [])

  return data
}

export default useRequestData
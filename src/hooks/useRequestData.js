import { useEffect, useState } from 'react'
import axios from 'axios'

export const useRequestDataLinst = (url) => {
    const [dataLista, setDataLista] = useState([])

    useEffect (() => {
        axios
        .get(url)
        .then((response) => {
            setDataLista(response.data)
            console.log(response.data + "dados Lista")
        })
        .catch((error) => {
            console.log(error.response)
        })
    }, [url])


  return dataLista
}

export const useRequestDataDetail = (url) => {
    const [dataD, setDataD] = useState([])

    useEffect (() => {

        axios.get(url)
        .then((response) => {
            setDataD(response.data)
            console.log(response.data + "dados Detalhes")
        })
        .catch((error) => {
            console.log(error.response)
        })

    }, [url])




  return dataD
}
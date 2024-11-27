import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import config from '../config'

const VisualizaNoticia = () => {
    const { id } = useParams()
    const [noticia, setNoticia] = useState({})

    useEffect(() => {
        const fetchNoticia = async () => {
            try {
                const response = await axios.get(`${config.apiUrl}/${id}`)
                setNoticia(response.data)
            } catch (error) {
                console.error("Erro ao buscar a notícia:", error)
            }
        }
        fetchNoticia()
    }, [id])

    return (
        <div>
            <h1>{noticia.titulo}</h1>
            <p>{noticia.texto}</p>
        </div>
    )
}

export default VisualizaNoticia

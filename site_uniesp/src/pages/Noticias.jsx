import React, { useEffect, useState } from 'react'
import axios from 'axios' 
import config from '../config'
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'

const Noticias = () => {

    const [noticias, setNoticias] = useState ([])

    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                const response = await axios.get(config.apiUrl)
                setNoticias(response.data)
            } catch (error) {
                console.error("Erro ao buscar notícias", error)
            }
        }

        fetchNoticias()
        
    }, [])

  return (
    <Box sx={{ p: 4 }}>
    <Typography variant="h3" gutterBottom>Notícias</Typography>
    <Grid container spacing={4}>
        {noticias.map(noticia => (
            <Grid item xs={12} sm={6} md={4} key={noticia.id}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={noticia.imagem}
                        alt="Imagem da Notícia"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {noticia.titulo}
                        </Typography>
                        <Link to={`/visualiza-noticia/${noticia.id}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
                            <Typography variant="body2" color="text.secondary">
                                Ler mais
                            </Typography>
                        </Link>
                    </CardContent>
                </Card>
            </Grid>
        ))}
    </Grid>
</Box>
  )
}

export default Noticias 
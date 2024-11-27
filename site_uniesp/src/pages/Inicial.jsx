import React from 'react'
import { Box, Paper, Typography, Grid } from '@mui/material'

const inicial = () => {
  return (
    <Box sx={{p: 4, backgroundColor: '#f0f0f0', borderRadius: '8px'}}>
        <Typography variant='h3' gutterBottom>
            Bem-vindo à Faculdade Uniesp
        </Typography>
        <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: '#ffffff', borderRadius: '8px'}}>
            <Typography variant='h5' gutterBottom>
                Sobre a Faculdade
            </Typography>
            <Typography variant='body1'>
                A Faculdade UNIESP é uma instituição de ensino superior...
            </Typography>
        </Paper>
        <Grid container spacing={4}>
            <Grid item sx={12} md={6}>
                <Paper elevation={3} sx={{p:3, backgroundColor: '#ffffff', borderRadius: '8px'}}>
                    <Typography variant='h5'gutterBottom>
                        Notícias
                    </Typography>
                    <Typography variant='body1'> 
                        Fique atualizado vom as últimas notícias e eventos...
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{p: 3, backgroundColor: '#ffffff', borderRadius: '8px'}}>
                    <Typography variant='h5' gutterBottom>
                            Área Administrativa
                    </Typography>
                    <Typography variant='body1'>
                        Acesse a área administrativa parq gerenciar notícias...
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    </Box>
  )
}

export default inicial
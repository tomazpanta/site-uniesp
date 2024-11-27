import React from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/system'

// Componente estilizado do MUI para exibir um banner de propaganda
const StyledBannerAd = styled(Box)({
  backgroundImage: `url('https://via.placeholder.com/1200x200?text=Propaganda+Banner')`,
  backgroundSize: 'cover', // A imagem cobre totalmente o espaço do Box
  backgroundPosition: 'center', // Centraliza a imagem no Box
  height: '200px', // Altura do banner
  marginBottom: '24px', // Margem inferior para separar do conteúdo abaixo
  borderRadius: '8px' // Bordas arredondadas para um visual mais suave
})

const BannerAd = () => {
  return <StyledBannerAd />
}

export default BannerAd
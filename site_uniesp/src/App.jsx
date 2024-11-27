import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container, Box, CssBaseline } from '@mui/material'
import Navbar from './components/Navbar'
import BannerAd from './components/BannerAd'
import Inicial from './pages/Inicial'

const App = () => {
  return (
    <BrowserRouter>
    <CssBaseline />
    <Container maxWidth='lg' sx={{backgroundColor: '#f7f7f7', minHeight: '100ch', padding: '16px', borderRadius: '8px' }}>
      <Box display="flex" alignItems="center" justifyContent="space-between" p={2} sx={{backgroundColor: '#fff', borderRadius:'8px', boxShadow: 1 }}>
        <Navbar />
      </Box>

      <BannerAd />
      <Box mt={4}>

        <Routes>
          <Route path="/" element={<Inicial />} />
        </Routes>

      </Box>

    </Container>
    </BrowserRouter>
  )
}

export default App
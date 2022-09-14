import React from 'react'
import { Carousel } from '../components/Carousel'
import { Layout } from '../components/layout/Layout'

const GaleriaPage = () => {
  return (
    <>
    <Layout title='Galería' pageDescription='Página de Galería'>

      <h1>Pagina de Galeria</h1>  
      <Carousel/>
    </Layout>
    </>
  )
}

export default GaleriaPage 
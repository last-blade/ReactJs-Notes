import { useState } from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GenreWiseMoviesList from './components/GenreWiseMoviesList'

function App() {


  return (
    <>
    <Header/>
    <Slider/>
    <ProductionHouse/>
    <GenreWiseMoviesList/>
    </>
  )
}

export default App

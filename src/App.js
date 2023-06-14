import React from 'react'
import Container from '@mui/material/Container'
import { Route, Routes } from 'react-router-dom'
import Home from './navsection/Home'
import Shop from './navsection/Shop';
import Navbar from './Navbar'
import NewProducts from './navsection/NewProducts';
import ProductPage from './navsection/ProductPage';
import CardItems from './navsection/CardItems';


const App = () => {
  return (
    <>
    <Container >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/NewProducts' element={<NewProducts />} />
        <Route path='CardItems' element={<CardItems />} />
        <Route path='/ProductPage' element={<ProductPage />} />
       
      </Routes>
    </Container>
    </>
  )
}

export default App
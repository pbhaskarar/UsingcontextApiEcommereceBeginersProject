import { Container, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { context } from './context/AppContext';

const Navbar = () => {
  const {cartItemsLength} = useContext(context)
  return (
    <>
    <Container>
       <Grid  sx={{background: 'yellow', color: 'black',justifyContent: 'center', alignItems: 'center', textAlign:'center', padding: '1rem'}}>
      <Grid >
        <Link to='/Home' style={{marginRigh: '3rem'}}>Home</Link>
        <Link to='/Shop' style={{marginLeft: '1rem'}}>Shop</Link>
        <Link to='/NewProducts' style={{marginLeft: '1rem'}}>NewProducts</Link>
        <Link to='/CardItems' style={{marginLeft: '1rem'}}>CardItems</Link>
        <Link to='/Productpage' style={{marginLeft: '1rem'}}><ShoppingCartRoundedIcon /><span style={{top: '-20px', position : 'relative'}}>{cartItemsLength}</span></Link> 
      </Grid>
       </Grid>
    </Container>
    </>
  )
}

export default Navbar
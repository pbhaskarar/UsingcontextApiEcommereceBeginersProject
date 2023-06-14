import { Card, CardActions, CardContent, Container, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { context } from '../context/AppContext'


const ProductPage = () => {
  const {cartItemsLength, cartItems} = useContext(context)
  return (
    <>
    <Container>
    <Typography
          variant="h4"sx={{ alignItems: "center", justifyContent: "center", textAlign: "center", margin: "2rem" }} >
          Your Cart Items {cartItemsLength}
        </Typography>
        <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
          {cartItems.map((product) => {
            return (
              <Grid item xs={12} sm={6} md={4} xl={3} key={product.id}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {product.productName}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {product.productPrice}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {product.selectProduct}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    
                    {/* <Button
                      size="small"
                      variant="contained"
                      onClick={() => {deleteHandle(product.id)}}
                    >
                      Delete
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
    </Container>
    </>
  )
}

export default ProductPage
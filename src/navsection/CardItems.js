import { Button, Card, CardActions, CardContent, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { context } from '../context/AppContext'

const CardItems = () => {
const {productdata, deleteHandle} = useContext(context);
const [search,setSearch] = useState('')

const searchHandle = (e) =>{
  setSearch(e.target.value)
}

const UpdatedSearch = productdata.filter((item) =>
      item.productName.toLowerCase().includes(search.toLocaleLowerCase())
);
  return (
    <>
    <Container>
    <Typography
          variant="h4"sx={{ alignItems: "center", justifyContent: "center", textAlign: "center", marginTop: "5rem" }} >
          All Products Are visible Here Also
        </Typography>
        <Grid>
        <TextField label='search' value={search} onChange={searchHandle} />
        </Grid>
        <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
          {UpdatedSearch.map((product) => {
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
                    
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => {deleteHandle(product.id)}}
                    >
                      Delete
                    </Button>
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

export default CardItems
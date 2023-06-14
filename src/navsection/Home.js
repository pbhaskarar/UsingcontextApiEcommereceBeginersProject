import React, { useEffect, useState } from "react";
import Products from "../components/Products.json";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";


const Home = () => {
    const  [data, setData] = useState(Products);

    useEffect(()=>{

        //reterving data from  local storage
        const ProductJsonData = localStorage.getItem('Products');
        if(ProductJsonData){
            setData(JSON.parse(ProductJsonData))
        }else{
            setData(Products)
        }
    },[])


    // store the data  in locxal storage in whn ever it changes
    useEffect(()=>{
        localStorage.setItem("products",JSON.stringify(data))
    },[data])
  return (
    <>
      <Container>
        <Typography
          variant="h4"
          sx={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            marginTop: "5rem",
          }}
        >
          All Products
        </Typography>
      </Container>
      <Grid container spacing={2}>
        {Products.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" size="small">Add to Cart</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>

    </>
  );
};

export default Home;

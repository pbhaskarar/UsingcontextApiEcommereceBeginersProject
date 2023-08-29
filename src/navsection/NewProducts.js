import {Box,Button,Card,CardActions,CardContent,Container,Grid,InputLabel,MenuItem,Select,TextField,Typography} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { context } from "../context/AppContext";

const NewProducts = () => {
  const {productdata, setProductData, deleteHandle, addToCart} = useContext(context);

  const [productName, setProductName] = useState("");
  const [Productprice, setProductPrice] = useState(1);
  const [selectProduct, setSelectProduct] = useState("");
  // const [productdata, setProductData] = useState(
  //   JSON.parse(localStorage.getItem("productdata")) || []
  // );

  

  const nameHandler = (e) => {
    setProductName(e.target.value);
  };
  const priceHandler = (e) => {
    setProductPrice(e.target.value);
  };

  const selectHandle = (e) => {
    setSelectProduct(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      id: uuidv4().slice(0, 6),
      productName,
      productPrice: Productprice,
      selectProduct,
    };
    
    setProductData((prev) => [...prev, newProduct]);
    setProductName("");
    setProductPrice("");
    setSelectProduct("");
  };



  // store the data  in locxal storage in whn ever it changes
  useEffect(() => {
    localStorage.setItem("productdata", JSON.stringify(productdata));
  }, [productdata]);

  
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
        <Grid>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={submitHandler}
          >
            <TextField
              id="outlined-basic"
              label="Product"
              variant="outlined"
              name="productName"
              value={productName}
              onChange={nameHandler}
            />
            <TextField
              id="outlined-basic"
              label="price"
              type="number"
              variant="outlined"
              name="Productprice"
              value={Productprice}
              onChange={priceHandler}
            />

            <InputLabel id="demo-simple-select-label">name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="category"
              value={selectProduct}
              onChange={selectHandle}
            >
              <MenuItem value="Samsung Galaxy S22 Ultr"> Samsung Galaxy S22 Ultr</MenuItem>
              <MenuItem value="iPhone 13 Pro">iPhone 13 Pro</MenuItem>
              <MenuItem value="Google Pixel 6 Pro">Google Pixel 6 Pro</MenuItem>
              <MenuItem value="MacBook Pro 14">MacBook Pro 14</MenuItem>
              <MenuItem value="Dell XPS 1">Dell XPS 1</MenuItem>
              <MenuItem value="HP Spectre x360">HP Spectre x360</MenuItem>
              <MenuItem value="iPad Pro 12.9">iPad Pro 12.9</MenuItem>
              <MenuItem value="Samsung Galaxy Tab S8 Ultra">Samsung Galaxy Tab S8 Ultra</MenuItem>
              <MenuItem value="Apple Watch Series 7">Apple Watch Series 7</MenuItem>
            </Select>
            <Button variant="contained" type="submit">
              Add
            </Button>
          </Box>
        </Grid>
        <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
          {productdata.map((product) => {
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
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => {
                        deleteHandle(product.id);
                      }}
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
  );
};

export default NewProducts;

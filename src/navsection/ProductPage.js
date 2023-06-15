import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { context } from "../context/AppContext";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const ProductPage = () => {
  const { cartItemsLength, cartItems, setCartItems } = useContext(context);

  const deleteHandle = (id) => {
    const UpdatedDelete = cartItems.filter((product) => product.id !== id);
    setCartItems(UpdatedDelete);
  };

  // const handleChange = (product, action) => {
  //   let ind = -1;
  //   cartItems.forEach((data, index) => {
  //     if (data.id === product.id) ind = index;
  //   });
  //   const tempArr = cartItems;
  //   if (action === "+1") {
  //     tempArr[ind]["count"] += 1;
  //   }
  //   if (action === "-1") {
  //     tempArr[ind]["count"] -= 1;
  //   }
  //   if (tempArr[ind]["count"] === 0) tempArr[ind]["count"] = 1;
  //   setCartItems([...tempArr]);
  // };

  // const handleChange = (product,d) =>{
  //   console.log(product, d)
  // }


  // const handleChange = (product, action) => {
  //   const updatedCartItems = cartItems.map((item) => {
  //     if (item.id === product.id) {
  //       if (action === "+1") {
  //         return { ...item, count: item.count + 1 };
  //       } else if (action === "-1") {
  //         return { ...item, count: Math.max(item.count - 1, 1) };
  //       }
  //     }
  //     return item;
  //   });
  
  //   setCartItems(updatedCartItems);
  // };

  // const handleChange = (product, action) =>{
  //   const updatedCartItems = cartItems.map((item) =>{
  //     if(item.id === product.id){
  //       if(action === "+1"){
  //         return {...item, count: item.count +1 }
  //         console.log(item)
  //       }else if (action === "-1"){
  //         return{...item, count: Math.max(-1,1)}
  //       }
  //     }
  //     return item;
  //   });
  //   setCartItems(updatedCartItems);
  //   console.log(updatedCartItems)
  // };
  const handleChange = (product, action) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === product.id) {
        let updatedCount = item.count;
        if (action === "+1") {
          updatedCount += 1;
        } else if (action === "-1") {
          updatedCount = Math.max(updatedCount - 1, 1);
        }
        return { ...item, count: updatedCount };
      }
      return item;
    });
  
    setCartItems(updatedCartItems);
  };

  const totalAmount = cartItems.reduce(
    (total, product) => total + Number(product.productPrice) * Number( product.count),
    0
  );

  return (
    <>
      <Container>
        <Typography
          variant="h4" sx={{   alignItems: "center",   justifyContent: "center",   textAlign: "center",   margin: "2rem", }} >
          Your Cart Items {cartItemsLength}
        </Typography>
        <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
          {cartItems.map((product, index) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                xl={3}
                key={`${product.id}_${index}`}
              >
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {product.productName}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {product.selectProduct}
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 1.5 }} color="black">
                      {product.productPrice}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      sx={{ color: "green" }}
                      onClick={() => handleChange(product, "+1")}
                    >
                      {" "}
                      <span style={{ fontSize: "2rem" }}>+</span>
                    </Button>
                    <Button>{product.count}</Button>
                    <Button
                      sx={{ color: "red" }}
                      onClick={() => handleChange(product, "-1")}
                    >
                      <span style={{ fontSize: "2rem" }}>-</span>
                    </Button>
                    <Button
                      sx={{ color: "red" }}
                      onClick={() => {
                        deleteHandle(product.id);
                      }}
                    >
                      <DeleteRoundedIcon sx={{ color: "red" }} />
                    </Button>
                    <Typography variant="h5">{product.productPrice * product.count }</Typography>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Grid >
          <Typography variant="h5" sx={{   alignItems: "center",   justifyContent: "center",   textAlign: "center",   margin: "2rem", }}>{`Total Price: ${totalAmount}`}</Typography>
        </Grid>
      </Container>
    </>
  );
};

export default ProductPage;

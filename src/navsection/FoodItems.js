import React, { useState } from 'react';
import Data from '../components/Data.json'
import { Button, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';

const FoodItems = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const filteredFoodItems = selectedCategory 
    ? Data.foodItems.filter((item) => item.category === selectedCategory)
    : Data.foodItems

    // console.log(filteredFoodItems)

    const  filteredFoodItemsLength = filteredFoodItems.length;
    // console.log(filteredFoodItemsLength)
    // console.log(filteredFoodItems.category)

  return (
    <>
      <Container>
        <Typography variant="h4" sx={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginTop: '5rem' }}>
          All Your Food Items  Here........{filteredFoodItemsLength}
        </Typography>

        <Grid>
          <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: '2rem' }}>
            <Button variant="contained" color="success" onClick={() => setSelectedCategory(null)}>All</Button>
            <Button variant="contained" color="success" onClick={() => setSelectedCategory('Breakfast')}>Breakfast</Button>
            <Button variant="contained" color="success" onClick={() => setSelectedCategory('Lunch')}>Lunch</Button>
            <Button variant="contained" color="success" onClick={() => setSelectedCategory('Dinner')}>Dinner</Button>
            <Button variant="contained" color="success" onClick={() => setSelectedCategory('Evening Snacks')}>Evening Snacks</Button>
          </Stack>
        </Grid>

        <Grid container spacing={2}>
          {filteredFoodItems?.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ minWidth: 275, minHeight: 250 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14, borderRadius: '50%', width: '1.5rem', background: 'black', color: 'white', textAlign:'center' }} gutterBottom>
                    {item.id}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant='h6' sx={{ mb: 1.5, textDecorationLine: 'underline', color:' red' }} color="text.primary">
                    {item.category}
                  </Typography>
                  <Typography variant="body2">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default FoodItems
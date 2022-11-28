import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { dbProducts } from '../../../dbProducts';
import { ProductCard } from '../../../components';

const laptops = dbProducts.filter((item) => item.category === 'Laptop');
export const LaptopPage: React.FC = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ mx: 1.5, my: 1.5 }}>
          <Typography gutterBottom variant="h3">
            Laptops
          </Typography>
          <Grid container spacing={3}>
            {laptops.map((laptop) => (
              <Grid item xs={12} key={laptop.id}>
                <ProductCard product={laptop} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

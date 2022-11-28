import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { dbProducts } from '../../dbProducts';
import { ProductCard } from '../ProductCard';

export const ProductList: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Box p={1}>
        <Typography gutterBottom variant="h4" fontWeight={600}>
          Ofertas del día
        </Typography>
        <Grid container spacing={3}>
          {dbProducts.map((product) => (
            <Grid item xs={12} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

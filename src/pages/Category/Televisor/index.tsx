import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { dbProducts } from '../../../dbProducts';
import { ProductCard } from '../../../components';

const Televisors = dbProducts.filter((item) => item.category === 'Televisor');
export const TelevisorPage: React.FC = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ mx: 1.5, my: 1.5 }}>
          <Typography gutterBottom variant="h3">
            Televisores
          </Typography>
          <Grid container spacing={3}>
            {Televisors.map((Televisor) => (
              <Grid item xs={12} key={Televisor.id}>
                <ProductCard product={Televisor} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

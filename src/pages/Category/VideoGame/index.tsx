import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { dbProducts } from '../../../dbProducts';
import { ProductCard } from '../../../components';

const VideoGames = dbProducts.filter((item) => item.category === 'VideoGame');

export const VideoGamePage: React.FC = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ mx: 1.5, my: 1.5 }}>
          <Typography gutterBottom variant="h3">
            VideoGames
          </Typography>
          <Grid container spacing={3}>
            {VideoGames.map((VideoGame) => (
              <Grid item xs={12} key={VideoGame.id}>
                <ProductCard product={VideoGame} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

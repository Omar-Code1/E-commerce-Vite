import React from 'react';
import { Box, Grid, Typography, Stack, Link, Container } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { headphoneProduct, relojProduct } from '../../dbProducts';

export const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box bgcolor="deepPurple.main">
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        {/* reloj */}
        <Box
          mx={{ xs: 0.75, md: 1.5 }}
          my={{ xs: 1.5, md: 3 }}
          justifyContent="center"
        >
          <Grid
            container
            bgcolor="violet.main"
            px={{ xs: 2, lg: 4 }}
            py={{ xs: 1, lg: 2 }}
            display="flex"
            alignItems="center"
            height={1}
          >
            {/* text */}
            <Grid item xs={7}>
              <Stack>
                <Typography
                  gutterBottom
                  variant="h4"
                  fontSize={{ xs: '1.5rem', sm: '2rem', md: '2.125rem' }}
                  color="common.white"
                  fontWeight={600}
                >
                  50% de descuento en Apple Watch
                </Typography>
                <Link
                  color="common.white"
                  sx={{ cursor: 'pointer' }}
                  onClick={() => {
                    navigate(`/Product/${relojProduct.id}`);
                  }}
                >
                  Comprar Ahora
                </Link>
              </Stack>
            </Grid>
            {/* img */}
            <Grid item xs={5}>
              <img src={relojProduct.img} alt="reloj" width="100%" />
            </Grid>
          </Grid>
        </Box>
        {/* Headphone */}
        <Box
          mx={{ xs: 0.75, md: 1.5 }}
          my={{ xs: 1.5, md: 3 }}
          justifyContent="center"
        >
          <Grid
            container
            bgcolor="indigo.main"
            px={{ xs: 2, lg: 4 }}
            py={{ xs: 1, lg: 2 }}
            display="flex"
            alignItems="center"
            height={1}
          >
            {/* text */}
            <Grid item xs={7}>
              <Stack>
                <Typography
                  gutterBottom
                  variant="h4"
                  fontSize={{ xs: '1.5rem', sm: '2rem', md: '2.125rem' }}
                  color="common.white"
                  fontWeight={600}
                >
                  50% de descuento en Headphone
                </Typography>
                <Link
                  color="common.white"
                  sx={{ cursor: 'pointer' }}
                  onClick={() => {
                    navigate(`/Product/${headphoneProduct.id}`);
                  }}
                >
                  Comprar Ahora
                </Link>
              </Stack>
            </Grid>
            {/* img */}
            <Grid item xs={5} width={1}>
              <img src={headphoneProduct.img} width="100%" alt="headphone" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

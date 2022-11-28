import React from 'react';
import {
  Container,
  Box,
  Grid,
  Stack,
  Typography,
  Rating,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../context/ProductProvider';

const ProductPage: React.FC = () => {
  const navigate = useNavigate();

  const context = React.useContext(ProductContext);

  const { img, title, prices, rating, description } = context!.product;

  return (
    <Container maxWidth="xl">
      <Box bgcolor="common.white" p={4} my={6}>
        <Grid container alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: 'flex', justifyContent: 'center', p: 2 }}
          >
            <img
              src={img}
              width={
                title === 'Logitech Headphone'
                  ? '60%'
                  : title === 'Apple Watch'
                  ? '60%'
                  : '80%'
              }
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ p: 2 }}>
            <Stack spacing={{ xl: 4.4, lg: 3, xs: 1.3 }} sx={{ height: 1 }}>
              <Typography variant="h2">{title.substring(0, 18)}</Typography>
              <Box>
                <Typography sx={{ display: 'inline', mr: 1 }}>
                  ${prices.new}
                </Typography>
                <Typography
                  sx={{
                    display: 'inline',
                    mr: 1,
                    textDecoration: 'line-through',
                    color: 'primary.light',
                  }}
                >
                  ${prices.old}
                </Typography>
              </Box>
              <Rating name="read-only" size="small" value={rating} readOnly />
              <Typography>{description}</Typography>
              <Button
                fullWidth
                variant="contained"
                onClick={() => navigate('/Checkout')}
              >
                Go to checkout
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductPage;

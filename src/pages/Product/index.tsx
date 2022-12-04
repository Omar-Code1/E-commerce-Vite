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
import { useNavigate, useParams } from 'react-router-dom';
import { dbProducts, headphoneProduct, relojProduct } from '../../dbProducts';

const ProductPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const product = () => {
    let product;
    if (id == '7') {
      product = relojProduct;
      return product;
    }
    if (id == '8') {
      product = headphoneProduct;
      return product;
    } else {
      product = dbProducts.filter((item) => item.id == id)[0];
      return product;
    }
  };

  const { title, description, img, prices, rating } = product();

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
                onClick={() => {
                  navigate(`/Checkout/${id}`);
                }}
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

import React from 'react';
import { Button, Grid, Box, TextField, Typography, Stack } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { dbProducts } from '../../dbProducts';
import { headphoneProduct, relojProduct } from '../../dbProducts';

const initialState = {
  cardName: '',
  cardNumber: '',
  cardholderName: '',
  expiryDate: '',
  CVV: '',
};

const CheckoutPage: React.FC = () => {
  const [inputs, handleChange, reset] = useForm(initialState);

  const { cardName, cardNumber, cardholderName, expiryDate, CVV } = inputs;

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

  const { title, img } = product();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    reset();
    console.log(inputs);
  };

  return (
    <Box
      sx={{
        width: { xs: '100%', md: '85%', xxl: '100%' },
        position: 'absolute',
        left: { xs: '0', md: 80, xxl: 80 },
        top: { xs: '0', md: 50, xxl: 90 },
      }}
    >
      <Grid container maxWidth="xl" bgcolor="common.white" alignItems="center">
        {/* Img */}
        <Grid
          item
          xs={12}
          md={8}
          lg={6}
          p={{ xs: 1.5, md: 3 }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box component="img" src={img} width={{ xs: '50%', md: '90%' }} />
          <Typography variant="h5">{title}</Typography>
        </Grid>
        {/* Checkout */}
        <Grid item xs={12} md={4} lg={6} p={{ xs: 1.5, md: 3 }}>
          <Typography gutterBottom align="center" variant="h4" fontWeight={700}>
            {' '}
            Cheackout
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Card Name"
                variant="outlined"
                color="info"
                focused
                onChange={handleChange}
                name="cardName"
                value={cardName}
              />
            </Box>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Card Number"
                variant="outlined"
                color="info"
                focused
                onChange={handleChange}
                name="cardNumber"
                value={cardNumber}
              />
            </Box>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Cardholder Name"
                variant="outlined"
                color="info"
                focused
                onChange={handleChange}
                name="cardholderName"
                value={cardholderName}
              />
            </Box>
            <Stack
              sx={{ mb: 3 }}
              spacing={3}
              direction={{ xs: 'row', md: 'column', lg: 'row' }}
            >
              <TextField
                size="small"
                fullWidth
                placeholder="Expiry Date"
                variant="outlined"
                color="info"
                focused
                onChange={handleChange}
                name="expiryDate"
                value={expiryDate}
              />
              <TextField
                size="small"
                fullWidth
                placeholder="CVV"
                variant="outlined"
                color="info"
                focused
                onChange={handleChange}
                name="CVV"
                value={CVV}
              />
            </Stack>

            <Button fullWidth variant="contained" type="submit">
              Complete order
            </Button>
          </Box>
        </Grid>
        <Button variant="contained" fullWidth onClick={() => navigate('/')}>
          BACK TO HOME
        </Button>
      </Grid>
    </Box>
  );
};

export default CheckoutPage;

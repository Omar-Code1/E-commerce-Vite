import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Grid,
  CardActions,
  Button,
  Rating,
  Box,
  Snackbar,
  Alert,
} from '@mui/material';
import { Product } from '../../type';
import { useAppDispatch } from '../../redux/hooks';
import { addToCart } from '../../redux/slices/cart.slice';
import { useNavigate } from 'react-router-dom';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const handleClickSnackBar = () => {
    setOpenSnackBar(true);
  };

  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };

  const { id, title, description, img, prices, rating } = product;

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product }));
  };

  return (
    <>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={2000}
        onClose={handleCloseSnackBar}
      >
        <Alert severity="success" variant="filled" sx={{ width: '100%' }}>
          Haz agregado este articulo al carrito!
        </Alert>
      </Snackbar>
      <Card sx={{ p: 2 }}>
        <Grid
          container
          alignItems="center"
          direction={{ xs: 'column', md: 'row' }}
        >
          <Grid item xs={12} md={3}>
            <CardMedia component="img" alt={`imagen de ${title}`} image={img} />
          </Grid>
          <Grid item xs={12} md={7}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom fontSize="1.35rem" fontWeight={700}>
                {title}
              </Typography>
              <Box
                mb={1}
                sx={{ display: 'flex', height: 1, alignItems: 'center' }}
              >
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
                <Rating size="small" value={rating} readOnly />
              </Box>
              <Typography
                fontSize="1.1rem"
                sx={{ color: 'info.main', width: { xs: 1, md: 0.8 } }}
              >
                {description}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} md={2} sx={{ width: 1 }}>
            <CardActions
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              <Stack sx={{ width: 1 }} spacing={2}>
                <Button
                  sx={{ fontSize: { md: '1.1rem' }, fontWeight: '400' }}
                  variant="contained"
                  fullWidth
                  onClick={() => {
                    navigate(`/Product/${id}`);
                  }}
                >
                  Comprar ahora
                </Button>
                <Button
                  sx={{ fontSize: { md: '1.1rem' }, fontWeight: '400' }}
                  variant="outlined"
                  fullWidth
                  onClick={() => {
                    handleAddToCart();
                    handleClickSnackBar();
                  }}
                >
                  Agregar al carrito
                </Button>
              </Stack>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

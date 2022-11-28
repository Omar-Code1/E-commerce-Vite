import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { ProductCard } from '../ProductCard';
import { Product, Search } from '../../type';
import { dbProducts } from '../../dbProducts';

type Props = {
  searchProduct: Search;
};

export const SearchProduct: React.FC<Props> = ({ searchProduct }) => {
  const [search, setSearch] = React.useState<Product[]>([]);

  const convertMayus = (string: string) => {
    if (string) {
      return string[0].toUpperCase() + string.slice(1);
    }
    return '';
  };

  React.useEffect(() => {
    if (searchProduct.product !== '') {
      setSearch(
        dbProducts.filter((item) =>
          item.title.startsWith(convertMayus(searchProduct.product)),
        ),
      );
    }
  }, [searchProduct]);

  return (
    <Container maxWidth="xl">
      <Box p={1}>
        <Grid container spacing={3}>
          {search.length > 0 ? (
            search.map((product) => (
              <Grid item xs={12} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography>Producto no encontrado</Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

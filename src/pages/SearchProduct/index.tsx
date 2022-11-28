import React from 'react';
import { Header, SearchProduct } from '../../components';
import { Search } from '../../type';

type Props = {
  searchProduct: Search;
};

const SearchProductPage: React.FC<Props> = ({ searchProduct }) => {
  return (
    <>
      <Header />
      <SearchProduct searchProduct={searchProduct} />
    </>
  );
};

export default SearchProductPage;

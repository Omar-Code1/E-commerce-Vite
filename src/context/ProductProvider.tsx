import React from 'react';
import { Product } from '../type';
export const ProductContext = React.createContext<ContextProps | null>(null);

type Props = {
  children: JSX.Element;
};

type ContextProps = {
  product: Product;
  changeProduct: (product: Product) => void;
  resetProduct: () => void;
};

const initialState = {
  id: 0,
  img: '',
  title: '',
  prices: {
    new: '',
    old: '',
  },
  rating: 0,
  description: '',
  category: '',
};

const ProductProvider: React.FC<Props> = ({ children }) => {
  const [product, setProduct] = React.useState<Product>(initialState);

  const changeProduct = (product: Product) => setProduct(product);
  const resetProduct = () => setProduct(initialState);

  return (
    <ProductContext.Provider value={{ product, changeProduct, resetProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

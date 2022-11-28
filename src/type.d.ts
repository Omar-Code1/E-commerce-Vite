export interface Search {
  product: string;
}

export interface Product {
  id: number | undefined;
  img: string;
  title: string;
  prices: {
    new: string;
    old: string;
  };
  rating: number;
  description: string;
  category: string;
}

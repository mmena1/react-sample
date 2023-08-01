import Box from '@mui/material/Box';

import ProductItem from "./ProductItem/ProductItem";
import ProductContainer from './ProductContainer';

const DUMMY_PRODUCTS = [
  {
    id: 10,
    name: "Watch",
    description: "Elegant and expensive",
    price: 500
  },
  {
    id: 11,
    name: "iPhone",
    description: "A standard iPhone",
    price: 999
  }
]

const AvailableProducts = () => {
  const productList = DUMMY_PRODUCTS.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
    />
  ));
  return (
    <Box component="main" sx={{ p: 3 }}>
      <ProductContainer>
        {productList}
      </ProductContainer>
    </Box>
  );
};

export default AvailableProducts;

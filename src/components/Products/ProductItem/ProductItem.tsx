import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import ProductItemForm from './ProductItemForm';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

export interface ProductItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
}


const ProductItem = (props: ProductItemProps) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price
    })
  };

  return (
    <Grid xs={3}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
        <Typography variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.description}
        </Typography>
        <Typography variant="body1">
          <br />
          {price}
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ProductItemForm onAddToCart={addToCartHandler}/>
      </CardActions>
      </Card>
    </Grid>
  )
};

export default ProductItem;
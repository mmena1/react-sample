import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductItem = (props) => {
  const price = `$${props.price.toFixed(2)}`

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
        <IconButton aria-label="add to cart">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
      </Card>
    </Grid>
  )
};

export default ProductItem;
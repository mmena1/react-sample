import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';

const ProductItemForm = props => {
  const onSubmit = event => {
    event.preventDefault();
    
    props.onAddToCart(1)
  }

  return (
    <form onSubmit={onSubmit}>
      {/* <TextField ref={amountInputRef} type="number" variant="standard" label="Quantity" inputProps={{
        defaultValue: 1,
        step: 1,
        min: 1,
        max: 5,
      }} InputLabelProps={{
        shrink: true,
      }}/> */}
      <IconButton color="secondary" aria-label="add to cart" type='submit'>
        <AddShoppingCartIcon />
      </IconButton>
    </form>

  );
};

export default ProductItemForm;
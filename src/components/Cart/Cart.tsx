import { useContext } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import CartContext from '../../store/cart-context';

const Cart = props => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItems = (
    <List>
      {cartCtx.items.map(item => {
        <ListItem disablePadding>
          <ListItemText primary={item.name} />
        </ListItem>
      })}
      {/* <ListItem disablePadding>
          <ListItemText primary="Hello" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="World" />
        </ListItem> */}
    </List>
  );
  return (
    <Dialog open={props.showCart} onClose={props.onClose}>
      <DialogTitle>Shopping cart</DialogTitle>
      <DialogContent>
        {cartItems}
        {/* {cartCtx.items[0].name} */}
        <DialogContentText>
          Total: {totalAmount}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={props.onClose}>Cancel</Button>
        {hasItems && <Button onClick={props.onClose}>Checkout</Button>}
      </DialogActions>
    </Dialog>
  );
}

export default Cart;
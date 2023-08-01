import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = props => {
  const cartCtx = useContext(CartContext);
  const itemsQuantity = cartCtx.items.length;
  return (
    <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={props.onClick}>
      <Badge badgeContent={itemsQuantity} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default HeaderCartButton;
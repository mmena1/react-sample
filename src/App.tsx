import './App.css'
import React from 'react';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Header from "./components/Layout/Header/Header";
import AvailableProducts from './components/Products/AvailableProducts';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {

  const [showCart, setShowCart] = React.useState(false);

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleHideCart = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CssBaseline />
        <Header onShowCart={handleShowCart} />
        <Cart showCart={showCart} onClose={handleHideCart}/>
        <AvailableProducts/>
      </Box>
    </CartProvider>
  )
}

export default App

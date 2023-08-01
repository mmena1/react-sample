import './App.css'

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Header from "./components/Layout/Header/Header";
import AvailableProducts from './components/Products/AvailableProducts';

function App() {

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CssBaseline />
        <Header/>
        <AvailableProducts/>
      </Box>
    </>
  )
}

export default App

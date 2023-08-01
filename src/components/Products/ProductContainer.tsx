import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { PropsWithChildren } from 'react';

const ProductContainer = (props: PropsWithChildren) => {

  return (
      <Box component="main" sx={{ p: 3 }}>
        <Grid container spacing={4}>
          {props.children}
        </Grid>
      </Box>
  );
};

export default ProductContainer;

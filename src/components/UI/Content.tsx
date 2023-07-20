import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

const Content = (props) => {

  return (
      <Box component="main" sx={{ p: 3 }}>
        <Grid container spacing={4}>
          {props.children}
        </Grid>
      </Box>
  );
};

export default Content;

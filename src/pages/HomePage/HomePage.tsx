import React from 'react';
import { Grid, Typography } from '@mui/material';
import { SearchSalesForm } from './components/SearchSalesForm';

export const HomePage: React.FC = () => {
  return (
    <Grid
      container
      gap={2}
      sx={{
        minHeight: 'inherit',
      }}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid>
        <Typography variant="h5" component="div">
          Search you place
        </Typography>
      </Grid>
      <Grid
        item
        p={1}
        width={{
          xs: '100%',
          sm: '60%',
          lg: '40%',
        }}
      >
        <SearchSalesForm />
      </Grid>
    </Grid>
  );
};

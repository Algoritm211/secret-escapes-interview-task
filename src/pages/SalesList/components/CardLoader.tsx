import { Stack, Skeleton, Grid } from '@mui/material';
import React from 'react';

export const CardLoader: React.FC = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </Stack>
  );
};

export const createLoaderBlocks = (count: number) => {
  return Array.from({ length: count }, (_, i) => (
    <Grid item key={i}>
      <CardLoader />
    </Grid>
  ));
};

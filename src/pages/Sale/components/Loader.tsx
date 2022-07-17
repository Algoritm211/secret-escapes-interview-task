import { Stack, Skeleton } from '@mui/material';
import React from 'react';

export const Loader = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" height={40} />
      <Skeleton variant="rectangular" height={118} />
      <Skeleton variant="rectangular" height={400} />
      <Skeleton variant="text" width={210} />
    </Stack>
  );
};

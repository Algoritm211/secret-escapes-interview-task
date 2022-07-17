import React from 'react';
import { Typography } from '@mui/material';

interface Props {
  value: string;
}

export const Price: React.FC<Props> = ({ value }) => {
  return (
    <>
      <Typography variant="h4" component="div">
        Price:
      </Typography>
      <Typography fontWeight="bold" fontStyle="italic" variant="h4" component="div">
        {value}
      </Typography>
    </>
  );
};

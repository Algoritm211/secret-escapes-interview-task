import React from 'react';
import { Typography } from '@mui/material';

interface Props {
  destination: string;
}

export const Destination: React.FC<Props> = ({ destination }) => {
  return (
    <Typography textAlign="center" fontWeight="bold" variant="h6" fontStyle="italic" color="text.secondary">
      Destination: {destination}
    </Typography>
  );
};

import React from 'react';
import { Typography } from '@mui/material';

interface Props {
  text: string;
}

export const Heading: React.FC<Props> = ({ text }) => {
  return (
    <Typography gutterBottom variant="h5" fontWeight="bold" overflow="hidden" component="div" textAlign="center">
      {text}
    </Typography>
  );
};

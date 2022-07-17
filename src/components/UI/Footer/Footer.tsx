import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h6" color="inherit">
          Developed By Alexey Horbunov
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

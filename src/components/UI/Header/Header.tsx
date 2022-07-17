import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate('/');
  };

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography
          sx={{
            cursor: 'pointer',
            textDecoration: 'none',
          }}
          variant="h6"
          color="inherit"
          onClick={goToMainPage}
        >
          Secret Escapes
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

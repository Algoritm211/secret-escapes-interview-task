import { Container } from '@mui/material';
import React from 'react';
import { Header } from './Header';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Header />
    <Container
      component="main"
      sx={{
        marginTop: '16px',
        minHeight: 'calc(100vh - 16px - 48px)',
      }}
    >
      {children}
    </Container>
  </>
);

import { Container } from '@mui/material';
import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Header />
    <Container
      component="main"
      sx={{
        marginTop: '16px',
        minHeight: 'calc(100vh - 16px - 48px - 64px)',
      }}
    >
      {children}
    </Container>
    <Footer />
  </>
);

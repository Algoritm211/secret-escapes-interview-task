import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Divider, Grid, Typography } from '@mui/material';
import { GET_SALE, GetSaleVars, SaleData } from '../../GraphQL/queries/sale';
import { Heading } from './components/Heading';
import { Destination } from './components/Destination';
import { Price } from './components/Price';
import { ImgWrapper } from './Sale.styled';
import { Loader } from './components/Loader';

export const Sale: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { loading, data } = useQuery<SaleData, GetSaleVars>(GET_SALE, { variables: { saleId: id! } });

  return (
    <Grid container flexDirection="column">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Grid item alignSelf="center">
            <Heading text={data?.sale.editorial.title!} />
          </Grid>
          <Grid item alignSelf="center" sx={{ py: 3 }}>
            <Destination destination={data?.sale.editorial.destinationName!} />
            <Divider />
          </Grid>
          <Grid item>
            <ImgWrapper>
              <img src={data?.sale.photos[0].url} alt="main sale" />
            </ImgWrapper>
            <Divider sx={{ mb: 2 }} />
          </Grid>
          <Grid item>
            <Typography dangerouslySetInnerHTML={{ __html: data?.sale.editorial.hotelDetails! }} />
            <Divider sx={{ mt: 2 }} />
          </Grid>
          <Grid item display="flex" justifyContent="start" sx={{ py: 3 }} gap={1}>
            <Price value={data?.sale.prices.leadRate.forDisplay!} />
          </Grid>
        </>
      )}
    </Grid>
  );
};

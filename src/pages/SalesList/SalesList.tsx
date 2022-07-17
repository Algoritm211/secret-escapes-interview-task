import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Box, Grid, SelectChangeEvent, Skeleton } from '@mui/material';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { SALE_SEARCH, SaleSearchVars, SaleSearchData } from '../../GraphQL/queries/saleSearch';
import SalesCard from './components/SalesCard';
import { SalesPaginator } from './components/SalesPaginator';
import { createLoaderBlocks } from './components/CardLoader';

export const SalesList: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [page, setPage] = useState<number>(Number(searchParams.get('offset')) || 1);
  const [limit, setLimit] = useState<number>(Number(searchParams.get('limit')) || 10);

  const { loading, data } = useQuery<SaleSearchData, SaleSearchVars>(SALE_SEARCH, {
    variables: {
      limit,
      offset: page - 1,
      query: searchParams.get('query')!,
    },
  });

  const onChangePage = (event: React.ChangeEvent<unknown>, pageNum: number) => {
    navigate({
      pathname,
      search: `query=${searchParams.get('query')}&offset=${pageNum}&limit=${limit}`,
    });
    setPage(pageNum);
  };

  const onLimitChange = (event: SelectChangeEvent<number>) => {
    navigate({
      pathname,
      search: `query=${searchParams.get('query')}&offset=${page}&limit=${event.target.value}`,
    });
    setLimit(+event.target.value);
  };

  const cardsBlock = data?.saleSearch.sales.map((sale) => {
    return (
      <Grid item key={sale.id}>
        <SalesCard
          saleId={sale.id}
          imgUrl={sale.photos[0].url}
          destination={sale.editorial.destinationName}
          title={sale.editorial.title}
        />
      </Grid>
    );
  });

  return (
    <>
      <Grid justifyContent="center" container gap={2}>
        {loading ? createLoaderBlocks(limit) : cardsBlock}
      </Grid>
      <Box sx={{ py: 3 }} display="flex" justifyContent="center" alignItems="center" gap={2} flexWrap="wrap">
        {loading ? (
          <Skeleton variant="text" width={210} />
        ) : (
          <SalesPaginator
            page={page}
            limit={limit}
            summaryCount={data?.saleSearch.resultCount!}
            onChangePage={onChangePage}
            onLimitChange={onLimitChange}
          />
        )}
      </Box>
    </>
  );
};

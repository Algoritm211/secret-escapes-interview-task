import React from 'react';
import { MenuItem, Pagination, Select, SelectChangeEvent } from '@mui/material';

interface Props {
  page: number;
  summaryCount: number;
  limit: number;
  onChangePage: (event: React.ChangeEvent<unknown>, pageNum: number) => void;
  onLimitChange: (event: SelectChangeEvent<number>) => void;
}

export const SalesPaginator: React.FC<Props> = ({ page, limit, summaryCount, onChangePage, onLimitChange }) => {
  return (
    <>
      <Select id="select-limit" label="Items on page" onChange={onLimitChange} defaultValue={limit}>
        <MenuItem value={10}>10 items</MenuItem>
        <MenuItem value={20}>20 items</MenuItem>
        <MenuItem value={30}>30 items</MenuItem>
      </Select>
      <Pagination page={page} count={summaryCount} onChange={onChangePage} variant="outlined" shape="rounded" />
    </>
  );
};

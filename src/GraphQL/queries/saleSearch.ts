import { gql } from '@apollo/client';

export interface SaleSearchVars {
  query: string;
  limit: number;
  offset: number;
}

interface Sale {
  id: string;
  editorial: {
    title: string;
    destinationName: string;
  };
  photos: Array<{ url: string }>;
}

export interface SaleSearchData {
  saleSearch: {
    resultCount: number;
    sales: Sale[];
  };
}

export const SALE_SEARCH = gql`
  query GetInfoById($query: String, $limit: Int, $offset: Int) {
    saleSearch(query: $query, travelTypes: "HOTEL_ONLY") {
      resultCount
      sales(limit: $limit, offset: $offset) {
        id
        editorial {
          title
          destinationName
        }
        photos {
          url
        }
      }
    }
  }
`;

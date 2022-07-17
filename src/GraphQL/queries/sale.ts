import { gql } from '@apollo/client';

export interface GetSaleVars {
  saleId: string;
}

interface Sale {
  editorial: {
    title: string;
    destinationName: string;
    hotelDetails: string;
  };
  prices: {
    leadRate: {
      forDisplay: string;
    };
  };
  photos: Array<{ url: string }>;
}

export interface SaleData {
  sale: Sale;
}

export const GET_SALE = gql`
  query GetSale($saleId: String!) {
    sale(saleId: $saleId) {
      editorial {
        title
        destinationName
        hotelDetails
      }
      prices {
        leadRate {
          forDisplay
        }
      }
      photos {
        url
      }
    }
  }
`;

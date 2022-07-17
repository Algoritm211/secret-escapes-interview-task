import { Box, styled } from '@mui/material';

export const ImgWrapper = styled(Box)`
  text-align: center;
  padding-bottom: 24px;
  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    transition: 0.5s ease;
  }

  img:hover {
    box-shadow: 0 10px 4px rgba(0, 0, 0, 0.3), -23px 0 20px -23px rgba(0, 0, 0, 0.6),
      23px 0 20px -23px rgba(0, 0, 0, 0.6), inset 0 0 40px rgba(0, 0, 0, 0.1);
  }
`;

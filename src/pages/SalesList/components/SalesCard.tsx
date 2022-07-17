import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Props {
  saleId: string;
  imgUrl: string;
  destination: string;
  title: string;
}

const SalesCard: React.FC<Props> = ({ imgUrl, title, destination, saleId }) => {
  const navigate = useNavigate();

  const onGoToSale = () => {
    navigate(`/sale/${saleId}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={onGoToSale} sx={{ height: '100%' }}>
        <CardMedia component="img" height="190" image={imgUrl} alt="location place" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" overflow="hidden">
            {title.length > 50 ? `${title.slice(0, 50)}...` : title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {destination.length > 40 ? `${destination.slice(0, 40)}...` : destination}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SalesCard;

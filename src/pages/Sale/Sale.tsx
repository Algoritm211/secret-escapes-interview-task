import React from 'react';
import { useParams } from 'react-router-dom';

export const Sale: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  return (
    <div>
      {id}
      Some text
    </div>
  );
};

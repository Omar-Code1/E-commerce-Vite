import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>NotFoundPage</div>
      <Button variant="contained" size="large" onClick={() => navigate('/')}>
        Back To Home
      </Button>
    </>
  );
};

export default NotFoundPage;

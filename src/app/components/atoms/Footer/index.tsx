import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import Container from '../Container';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: '#1E3A8A',
        py: 5,
        px: 2,

        [theme.breakpoints.up('md')]: {
          py: 10,
          px: 4,
        },
      }}
    >
      <Typography
        color='#fff'
        sx={{
          letterSpacing: '2px',
        }}
      >
        &copy; 2012 DE, Inc. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

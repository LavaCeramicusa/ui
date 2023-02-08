import React from 'react';
import { Box, Typography } from '@mui/material';

const Logo = () => {
  // const theme = useTheme();

  return (
    <Typography
      variant='h5'
      color='red'
      sx={{
        fontWeight: 900,
        textTransform: 'uppercase',
        fontStyle: 'italic',
      }}
    >
      Us Ceramic
    </Typography>
  );
};

export default Logo;

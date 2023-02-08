import React from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';

import { IPersonnel } from 'types/personnel';

const Personnel = ({ personInfo }: { personInfo: IPersonnel }) => {
  const { avatar, name, position } = personInfo;
  const theme = useTheme();

  return (
    <Stack alignItems='center'>
      <Box
        component='img'
        src={avatar}
        sx={{
          width: '200px',
          height: '200px',
          borderRadius: '999px',

          [theme.breakpoints.up('md')]: {
            width: '450px',
            height: '450px',
          },
        }}
      />

      <Typography
        variant='h3'
        mt={2}
        color='primary.dark'
        sx={{
          letterSpacing: '2px',
        }}
      >
        {name}
      </Typography>
      <Typography
        variant='body2'
        color='red'
        sx={{
          fontSize: '20px',
          letterSpacing: '2px',
        }}
      >
        {position}
      </Typography>
    </Stack>
  );
};

export default Personnel;

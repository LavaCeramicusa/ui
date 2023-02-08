import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { IPersonnel } from 'types/personnel';

interface Props {
  customer: IPersonnel;
}

const Customer = ({ customer }: Props) => {
  const { avatar, name, position } = customer;

  return (
    <Stack textAlign='center'>
      <Box
        component='img'
        sx={{
          borderRadius: '4px',
        }}
        src={avatar}
        alt={name}
      />
      <Typography
        color='primary'
        variant='h5'
        sx={{
          mt: 2,
          letterSpacing: '2px',
        }}
      >
        {name}
      </Typography>
      <Typography
        variant='body2'
        sx={{
          letterSpacing: '4px',
          color: 'red',
        }}
      >
        {position}
      </Typography>
    </Stack>
  );
};

export default Customer;

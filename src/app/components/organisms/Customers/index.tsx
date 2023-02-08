import React from 'react';
import { Stack, Typography, useTheme } from '@mui/material';
import Container from 'app/components/atoms/Container';
import { experts } from 'data';
import Customer from 'app/components/molecules/Customer';

const Customers = () => {
  const theme = useTheme();

  return (
    <Container
      sx={{
        textAlign: 'center',
      }}
    >
      <Typography
        color='#e5938f'
        sx={{
          textTransform: 'uppercase',
          letterSpacing: '3px',
        }}
      >
        The allsmiles team
      </Typography>
      <Typography
        color='primary'
        variant='h3'
        sx={{
          mt: 2,
          letterSpacing: '2px',
        }}
      >
        What Our Customers Say
      </Typography>
      <Typography
        color='grey'
        sx={{
          mb: 8,
          letterSpacing: '1px',
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        voluptatibus perspiciatis. Impedit deserunt reiciendis ex, iure eos quos
        eum, tempora porro veniam sequi maiores optio sit iusto. Amet, vero
        porro?
      </Typography>
      <Stack
        flexDirection='column'
        gap={4}
        sx={{
          px: 2,

          [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            px: 0,
          },
        }}
      >
        {experts.map((expert) => (
          <Customer customer={expert} />
        ))}
      </Stack>
    </Container>
  );
};

export default Customers;

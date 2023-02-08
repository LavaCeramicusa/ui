import React from 'react';
import { Grid, Stack, useTheme } from '@mui/material';

import Service from 'app/components/molecules/Service';
import Container from 'app/components/atoms/Container';

import { services } from 'data';

const Services = () => {
  const theme = useTheme();

  return (
    <Container
      sx={{
        backgroundColor: '#DCFCE7',
      }}
    >
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item xs={12} sm={6}>
            <Service service={service} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;

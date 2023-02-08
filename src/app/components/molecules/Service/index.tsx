import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { IService } from 'types/service';

const Service = ({ service }: { service: IService }) => {
  const { icon, title, description } = service;

  return (
    <Stack flexDirection='row' alignItems='center' gap={2}>
      <Box component='img' src={icon} />

      <Stack gap={1}>
        <Typography variant='h5' color='primary'>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Stack>
    </Stack>
  );
};

export default Service;

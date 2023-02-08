import React from 'react';
import { Box, Stack, useTheme } from '@mui/material';
import { clients } from 'data';
import Container from 'app/components/atoms/Container';

const Clients = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 5,
        px: 2,
        bgcolor: '#FFEDD5',

        [theme.breakpoints.up('md')]: {
          py: 10,
          px: 4,
        },
      }}
    >
      <Stack
        flexDirection='row'
        flexWrap='wrap'
        alignItems='center'
        justifyContent='space-between'
        sx={(theme) => ({
          [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
          },
        })}
      >
        {clients.map((client) => (
          <Box
            component='img'
            src={client.image}
            alt={client.title}
            sx={{
              my: 2,
              width: '110px',
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Clients;

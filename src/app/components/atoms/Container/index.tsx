import React from 'react';
import {
  Container as MuiContainer,
  SxProps,
  Theme,
  useTheme,
} from '@mui/material';

interface Props {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

const Container = ({ children, sx = {} }: Props) => {
  const theme = useTheme();

  return (
    <MuiContainer
      maxWidth='xl'
      sx={{
        py: 5,
        [theme.breakpoints.up('md')]: {
          py: 10,
        },
        ...sx,
      }}
    >
      {children}
    </MuiContainer>
  );
};

export default Container;

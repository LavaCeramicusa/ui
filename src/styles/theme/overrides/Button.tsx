import { Theme } from '@mui/material';

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          paddingLeft: '20px',
          paddingRight: '20px',
          fontSize: theme.typography.button.fontSize,

          '&.Mui-disabled': {
            border: 'none',
          },
        },
        sizeLarge: {
          height: 48,
        },
        sizeMedium: {
          height: 40,
        },
        sizeSmall: {
          height: 36,
        },

        containedPrimary: {
          backgroundColor: theme.palette.primary.main,
          boxShadow: 'none',
          color: theme.palette.common.white,
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: theme.palette.primary.light,
          },
        },
        outlinedPrimary: {
          '&:hover': {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
          },
        },
      },
    },
  };
}

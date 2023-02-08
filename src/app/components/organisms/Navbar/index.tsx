import React, { useCallback, useMemo, useReducer, useState } from 'react';
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';

import { ReactComponent as Loading } from 'assets/spinner.svg';
import Logo from 'app/components/atoms/Logo';
import { Card } from 'types/card';
import { LoadingButton } from '@mui/lab';
import { fetchCard } from 'services/cardService';

interface Action {
  type: 'FETCH' | 'FETCH_SUCCESS' | 'FETCH_FAILED' | 'CHANGE_CODE';
  payload?: any;
}

const infoCard = [
  { key: 'code', label: 'CODE' },
  { key: 'type', label: 'TYPE' },
  { key: 'period', label: 'PERIOD ACTIVE' },
  { key: 'activeDate', label: 'ACTIVE DATE' },
  { key: 'customerName', label: 'CUSTOMER NAME' },
  { key: 'customerPhoneNumber', label: 'CUSTOMER PHONE NUMBER' },
  { key: 'customerEmail', label: 'CUSTOMER EMAIL' },
  { key: 'customerAddress', label: 'CUSTOMER ADDRESS' },
];

const initState = {
  data: {} as Card,
  loading: false,
  error: false,
};

const reducer = (state: typeof initState, action: Action) => {
  switch (action.type) {
    case 'CHANGE_CODE':
      return {
        ...state,
        error: false,
      };
    case 'FETCH':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case 'FETCH_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const Navbar = () => {
  const theme = useTheme();
  const [state, dispatch] = useReducer(reducer, initState);
  const [code, setCode] = useState('');
  const [openNav, setOpenNav] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const onOpenSearch = useCallback(() => {
    setOpenSearch(true);
    setOpenNav(false);
  }, []);

  const onClosePopup = useCallback(() => {
    setOpenSearch(false);
  }, []);

  const handleSearch = async () => {
    if (state.loading) return;

    try {
      if (code) {
        dispatch({ type: 'FETCH' });
        const res = await fetchCard(code);
        if (res?.data?.length === 0) {
          dispatch({ type: 'FETCH_FAILED', payload: true });
          return;
        }
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: res.data[0].attributes,
        });
      }
    } catch (err) {
      dispatch({
        type: 'FETCH_FAILED',
        payload: false,
      });
    }
  };

  const onSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCode(e.target.value);
      dispatch({
        type: 'CHANGE_CODE',
      });
    },
    []
  );

  const renderPeriod = useMemo(() => {
    if (!state.data || !state.data.code) return '';

    switch (state.data.type) {
      case 'Lava Smile':
        return '10 years';
      case 'Lava Gold':
        return '15 years';
      case 'Lava Platinum':
        return '20 years';
      default:
        return 'Unlimited';
    }
  }, [state.data]);

  return (
    <Stack
      flexDirection='row'
      alignItems='center'
      sx={{
        px: 2,
        py: 3,
        borderBottom: '2px solid #f5f1f1',

        [theme.breakpoints.up('md')]: {
          px: 4,
        },
      }}
    >
      <Logo />

      <Box sx={{ flexGrow: 1 }} />

      <div>
        <Button sx={{ mr: 2 }} onClick={onOpenSearch}>
          Search
        </Button>
      </div>

      {openSearch && (
        <Modal
          open={openSearch}
          onClose={onClosePopup}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Stack
            alignItems='center'
            sx={{
              py: 3,
              background: '#fff',
            }}
          >
            <Typography
              variant='h5'
              component='h2'
              sx={{
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
              color='primary'
            >
              Search Card Information
            </Typography>
            <Stack
              flexDirection='row'
              gap={2}
              sx={{
                pt: 2,
                pb: 4,
              }}
            >
              <Stack>
                <TextField
                  size='small'
                  value={code}
                  onChange={onSearchChange}
                />
                {state.error && (
                  <Typography color='red'>Card not exists!</Typography>
                )}
              </Stack>
              <LoadingButton
                loading={state.loading}
                variant='contained'
                onClick={handleSearch}
              >
                Search
              </LoadingButton>
            </Stack>

            {state.data.code && (
              <Stack
                sx={{
                  width: '100%',
                  px: 2,

                  [theme.breakpoints.up('md')]: {
                    width: 'auto',
                    minWidth: '450px',
                  },
                }}
              >
                {infoCard.map((proper) => (
                  <Stack
                    flexDirection='row'
                    alignItems='baseline'
                    my='2px'
                    key={proper.key}
                  >
                    <Typography
                      color='gray'
                      sx={{
                        letterSpacing: '1px',
                        fontSize: '14px',
                        mr: 1,
                      }}
                    >
                      {proper.label}:
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                      }}
                    >
                      {proper.key === 'period'
                        ? renderPeriod
                        : state.data[proper.key]}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            )}
          </Stack>
        </Modal>
      )}
    </Stack>
  );
};

export default Navbar;

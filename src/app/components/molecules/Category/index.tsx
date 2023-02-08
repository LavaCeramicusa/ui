import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { ICategory } from 'types/category';

interface Props {
  position?: 'left' | 'right';
  category: ICategory;
}

const Category = ({ position = 'left', category }: Props) => {
  const { tabLabel, icon, title, description, subDescription } = category;

  return (
    <Stack>
      <Typography variant='h3' color='secondary'>
        {tabLabel}
      </Typography>
      <Typography color='primary' mb={4}>
        {title}
      </Typography>

      <Stack
        flexDirection={`${position === 'left' ? 'row-reverse' : 'row'}`}
        gap={4}
      >
        <Box
          component='img'
          src={icon}
          sx={{
            width: '400px',
            borderRadius: '10px',
          }}
        />
        <Stack>
          <Typography mb={1}>{description}</Typography>
          <Typography>{subDescription}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Category;

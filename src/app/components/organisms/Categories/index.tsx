import { Box } from '@mui/system';
import Container from 'app/components/atoms/Container';
import Category from 'app/components/molecules/Category';
import { categories } from 'data';
import React from 'react';

const Categories = () => {
  return (
    <Container
      sx={{
        bgcolor: '#FFFBEB',
      }}
    >
      {categories.map((category, index) => {
        const sur = index % 2;
        return (
          <Box width='75%' ml={`${sur === 1 ? 'auto' : ''}`} my={8}>
            <Category
              category={category}
              key={category.tabLabel}
              position={`${sur === 0 ? 'left' : 'right'}`}
            />
          </Box>
        );
      })}
    </Container>
  );
};

export default Categories;

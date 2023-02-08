import React from 'react';
import { Container } from '@mui/material';
import Navbar from 'app/components/organisms/Navbar';
import Services from 'app/components/organisms/Services';
import Personnels from 'app/components/organisms/Personnels';
import Categories from 'app/components/organisms/Categories';
import Footer from 'app/components/atoms/Footer';
import Clients from 'app/components/organisms/Clients';
import Customers from 'app/components/organisms/Customers';

const Home = () => {
  return (
    <Container
      sx={{
        p: '0 !important',
        maxWidth: '100% !important',
      }}
    >
      <Navbar />
      {/* <Services /> */}
      <Personnels />
      {/* <Categories /> */}
      <Customers />
      <Clients />
      <Footer />
    </Container>
  );
};

export default Home;

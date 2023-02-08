import React from 'react';
import { A11y, Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { styled } from '@mui/material/styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { personnels } from 'data';
import Container from 'app/components/atoms/Container';
import { Typography } from '@mui/material';
import Personnel from 'app/components/molecules/Personnel';

const SwiperStyled = styled(Swiper)({
  '.swiper-button-prev': {
    top: '40%',

    '&::after': {
      fontSize: '35px',
    },
  },
  '.swiper-button-next': {
    top: '40%',

    '&::after': {
      fontSize: '35px',
    },
  },
});

const SwiperSlideStyled = styled(SwiperSlide)({
  paddingBottom: '50px',
});

const Personnels = () => {
  return (
    <Container>
      <Typography
        variant='h3'
        textAlign='center'
        color='primary'
        mb={4}
        sx={{
          letterSpacing: '2px',
        }}
      >
        Our Personnels
      </Typography>

      <SwiperStyled
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 55500 }}
      >
        {personnels.map((personnel, index) => {
          return (
            <SwiperSlideStyled key={index}>
              <Personnel personInfo={personnel} />
            </SwiperSlideStyled>
          );
        })}
      </SwiperStyled>
    </Container>
  );
};

export default Personnels;

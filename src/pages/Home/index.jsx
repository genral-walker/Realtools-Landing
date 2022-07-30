import {
  Box,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  Grid,
} from '@mui/material';
import {
  CustomButton,
  CustomHeading,
  Form,
  Navbar,
  WareHouseDetails,
} from 'components';
import { wareHouseDetails } from 'data';
import { HomeWrapper } from './styles';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export const Home = () => {
  const theme = useTheme();
  const screenIsBelow645 = useMediaQuery(theme.breakpoints.down('645'));

  return (
    <HomeWrapper>
      <Navbar />

      <Box component="header" className="header">
        <Typography variant="h1" className="h1">
          Self Storage Business <br />
          Buy. Sell. Learn.
        </Typography>
        <Typography variant="body1" className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sagittis,
          aliquam non tortor blandit lobortis. blandit
        </Typography>
        <Stack
          direction={screenIsBelow645 ? 'column' : 'row'}
          spacing={2}
          className="btns"
        >
          <CustomButton displayType={'secondary'} size="large">
            Sell Your Self Storage
          </CustomButton>
          <CustomButton displayType={'invert'} size="large">
            Active Self Storage Listings
          </CustomButton>
        </Stack>
      </Box>

      <Box component={'main'}>
        <Box component={'section'} className="featured">
          <CustomHeading variant="subHead" align="center">
            Featured Self Storages
          </CustomHeading>
          <CustomHeading variant="subHeadText" align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare
          </CustomHeading>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={17}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              [theme.breakpoints.values.sm]: {
                slidesPerView: 2,
              },
              [theme.breakpoints.values.md]: {
                slidesPerView: 3,
              },
              [theme.breakpoints.values.lg]: {
                slidesPerView: 4,
              },
            }}
          >
            {wareHouseDetails.map((wareHouse, idx) => (
              <SwiperSlide key={idx}>
                <WareHouseDetails
                  bg="true"
                  {...wareHouse}
                  style={{ width: '300px', height: '300px' }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Box component={'section'} className="active-section">
          <CustomHeading variant="subHead" align="center">
            Active Listing Self Storages
          </CustomHeading>
          <CustomHeading variant="subHeadText" align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare
          </CustomHeading>

          <Form />

          <Grid container spacing={2}>
            {wareHouseDetails.map((wareHouse, idx) => (
              <Grid key={idx} item sm={6} md={4}>
                <WareHouseDetails {...wareHouse} boxShadow />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Stack alignItems={'center'} className='active-extended'>
          <CustomButton displayType={'secondary'} size='large'>View More Listings</CustomButton>
        </Stack>
      </Box>
    </HomeWrapper>
  );
};

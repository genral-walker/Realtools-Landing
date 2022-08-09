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
  CustomCTA,
  CustomHeading,
  Form,
  LearnDetails,
  Navbar,
  WareHouseDetails,
} from 'components';
import { learnDetails, wareHouseDetails } from 'data';
import { HomeWrapper } from './styles';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import sellHero from 'assets/images/sell-hero.svg';
import buyHero from 'assets/images/buy-hero.svg';
import { ReactComponent as RightArrowIcon } from 'assets/icons/arrow.svg';

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

          <Grid
            container
            rowSpacing={{ xs: 3, sm: 2 }}
            columnSpacing={{ xs: 0, sm: 2 }}
          >
            {wareHouseDetails.map((wareHouse, idx) => (
              <Grid key={idx} item xs={12} sm={6} md={4}>
                <WareHouseDetails {...wareHouse} boxShadow="true" />
              </Grid>
            ))}
          </Grid>

          <Stack alignItems={'center'} className="active-extended">
            <CustomButton displayType={'secondary'} size="large">
              View More Listings
            </CustomButton>
          </Stack>
        </Box>

        <Box component={'section'} className="sell-section">
          <Stack direction="row">
            <Box>
              <CustomHeading variant="subHead">
                Do you have a Self Storage for Sale?
              </CustomHeading>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                tortor sapien sagittis maecenas tincidunt. Quis pretium ornare
                id diam amet proin scelerisque nunc.
              </Typography>
              <CustomButton>Sell Your Self Storage</CustomButton>
            </Box>
            <img src={sellHero} alt="Sell your storage image" />
          </Stack>
        </Box>

        <Box sx={{ backgroundColor: 'white' }}>
          <Stack component={'section'} className="buy-section" direction="row">
            <img src={buyHero} alt="Sell your storage image" />
            <Box>
              <CustomHeading variant="subHead">
                Do you want to buy a Self Storage?
              </CustomHeading>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                tortor sapien sagittis maecenas tincidunt. Quis pretium ornare
                id diam amet proin scelerisque nunc.
              </Typography>
              <CustomButton>Sell Your Self Storage</CustomButton>
            </Box>
          </Stack>

          <Box component={'section'} className="learn-section">
            <CustomHeading variant={'subHead'}>
              Learn Everything About Buying, Selling, and Operating a Self
              Storage
            </CustomHeading>
            <Typography variant="body1">
              Learn about literally anything to know about Selling or Buying a
              Self Storage
            </Typography>

            <Grid
              container
              spacing={3}
              sx={{
                p: {
                  xs: '50px 0px',
                  md: '50px 30px',
                },
              }}
            >
              {learnDetails.map((learnDetail, idx) => (
                <Grid item key={idx} xs={12} sm={6} lg={3}>
                  <LearnDetails {...learnDetail} />
                </Grid>
              ))}
            </Grid>

            <Stack direction={'row'} justifyContent={'center'}>
              <CustomButton displayType={'secondary'} size={'large'}>
                Explore the Learning Section
              </CustomButton>
            </Stack>
          </Box>

          <Box component={'section'} className="cta">
            <CustomCTA
              heading="Any Queries? Reach Out to Us"
              text="Feel free to write to us, we are happy to help you"
              btnText="Write to Us"
              btnRightIcon={RightArrowIcon}
            />
          </Box>
        </Box>
      </Box>
    </HomeWrapper>
  );
};

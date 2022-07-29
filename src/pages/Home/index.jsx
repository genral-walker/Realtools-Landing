import {
  Box,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  Grid,
} from '@mui/material';
import { CustomButton, Navbar, WareHouseDetails } from 'components';
import { wareHouseDetails } from 'data';
import { HomeWrapper } from './styles';

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
          <Typography variant="h2" align="center">
            Featured Self Storages
          </Typography>
          <Typography variant="body2" align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
            sapien sagittis maecenas tincidunt. Quis pretium ornare
          </Typography>

          <Grid container spacing={2}>
            {wareHouseDetails.map((wareHouse) => (
              <Grid item sm={6} md={4} lg={3}>
                <WareHouseDetails bg {...wareHouse} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </HomeWrapper>
  );
};

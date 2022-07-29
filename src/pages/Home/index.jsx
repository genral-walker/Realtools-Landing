import { Box, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';
import { CustomButton, Navbar } from 'components';
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
          <CustomButton size="large">Sell Your Self Storage</CustomButton>
          <CustomButton displayType={'invert'} size="large">
            Active Self Storage Listings
          </CustomButton>
        </Stack>
      </Box>
    </HomeWrapper>
  );
};

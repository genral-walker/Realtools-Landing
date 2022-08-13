import {
  Box,
  Grid,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Select,
  MenuItem,
} from '@mui/material';
import { CustomButton } from 'components';
import { FooterWrapper } from './styles';
import { ReactComponent as FooterHeroIcon } from 'assets/icons/footer-icon.svg';
import { ReactComponent as FbIcon } from 'assets/icons/fb.svg';
import { ReactComponent as InstaIcon } from 'assets/icons/insta.svg';
import { ReactComponent as LinkedInIcon } from 'assets/icons/linkedIn.svg';
import { ReactComponent as TwitterIcon } from 'assets/icons/twitter.svg';
import { ReactComponent as GlobeIcon } from 'assets/icons/globe.svg';

export const Footer = () => {
  return (
    <FooterWrapper
      component={'footer'}
      container
      rowSpacing={{ xs: 5, md: 3 }}
      columnSpacing={3}
    >
      <Grid item xs={12} sm={6} md={5} lg={4}>
        <Stack spacing={1} direction="row">
          <FooterHeroIcon />
          <Typography variant="h3" alignSelf={'end'}>
            StorageConnect
          </Typography>
        </Stack>

        <Typography variant="body2" mt={2} mb={{ xs: 2, sm: 4.5 }}>
          Nam posuere accumsan porta. Integer id orci sed ante tincidunt
          tincidunt sit amet sed libero.
        </Typography>

        <Typography variant="body2">
          © StorageConnect 2022, All Rights Reserved
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Typography variant="h4" textTransform={'uppercase'}>
          Quick Links
        </Typography>
        <Box component={'nav'} aria-label="Quick links">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Active Listings" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Sell your Self Storage" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Free Evaluation" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Learn" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Typography variant="h4" textTransform={'uppercase'}>
          Newsletter
        </Typography>
        <Box>
          <List>
            <ListItem disablePadding>
              <ListItemText primary="Get latest updates right in your inbox" />
            </ListItem>
            <ListItem disablePadding>
              <Box component={'form'} noValidate mt={0.5}>
                <TextField size="small" label="Enter your email" />
                <CustomButton>Subscribe Now</CustomButton>
              </Box>
            </ListItem>
          </List>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={3} lg={3}>
        <Typography variant="h4" textTransform={'uppercase'}>
          Let’s get social
        </Typography>
        <Stack spacing={2} direction={'row'} mt={3} mb={4}>
          <FbIcon />
          <LinkedInIcon />
          <TwitterIcon />
          <InstaIcon />
        </Stack>

        <Select value={1} size="small" sx={{ width: '200px' }}>
          <MenuItem value={1}>
            <Stack spacing={1} direction="row">
              <GlobeIcon />
              <b>English - En</b>
            </Stack>
          </MenuItem>
        </Select>
      </Grid>
    </FooterWrapper>
  );
};

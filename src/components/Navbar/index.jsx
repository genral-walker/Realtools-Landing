import { Toolbar, Stack, Button, Typography } from '@mui/material';
import { NavbarWrapper } from './styles';
import { ReactComponent as HeroIcon } from 'assets/icons/hero-icon.svg';
import { CustomButton } from 'components';

export const Navbar = () => {
  return (
    <NavbarWrapper elevation={0} position="static">
      <Toolbar>
        <Stack direction="row" className="hero">
          <HeroIcon/>
          <Button href="#">
            <Typography variant="h3">StorageConnect</Typography>
          </Button>
        </Stack>
        <Stack direction="row" spacing={1.5} ml="auto">
          <Button>Active Listings</Button>
          <Button>Sell your Self Storage</Button>
          <Button>Free Evaluation</Button>
          <Button>Learn</Button>
          <CustomButton displayType={'secondary'}>Contact</CustomButton>
        </Stack>
      </Toolbar>
    </NavbarWrapper>
  );
};

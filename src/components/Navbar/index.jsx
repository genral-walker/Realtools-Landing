import {
  Toolbar,
  Stack,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import { NavbarWrapper } from './styles';
import { ReactComponent as HeroIcon } from 'assets/icons/hero-icon.svg';
import { CustomDrawer } from 'components';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { DynamicNavSection } from './DynamicNavSection';

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const theme = useTheme();
  const screenIsBelow1000 = useMediaQuery(theme.breakpoints.down('1000'));

  return (
    <>
      <CustomDrawer isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <DynamicNavSection shouldMobileShow />
      </CustomDrawer>

      <NavbarWrapper elevation={0} position="static">
        <Toolbar>
          <Stack direction="row" className="hero">
            <HeroIcon />
            <Button href="#">
              <Typography variant="h3">StorageConnect</Typography>
            </Button>
          </Stack>
          <Stack direction="row" spacing={1.5} ml="auto">
            {screenIsBelow1000 ? (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setIsModalOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <DynamicNavSection />
            )}
          </Stack>
        </Toolbar>
      </NavbarWrapper>
    </>
  );
};

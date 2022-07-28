import { AppBar, styled } from '@mui/material';
import { lime } from '@mui/material/colors';

export const NavbarWrapper = styled(AppBar)(({ theme: { palette } }) => ({
  backgroundColor: 'unset',
  padding: '12px 45px',
  color: palette.common.white,
  textTransform: 'unset',
  '@media only screen and (max-width: 950px)': {
    padding: '12px 10px',
  },
  a: {
    color: 'inherit',
  },
  '.hero': {
    svg: {
      alignSelf: 'center',
    },
    cursor: 'pointer',
    h3: {
      textTransform: 'capitalize',
      fontSize: '1.2rem',
    },
  },
  button: {
    textTransform: 'inherit',
    color: 'inherit',
    '&:hover': {
      backgroundColor: lime['A100'],
      color: palette.text.primary,
    },
  },
}));

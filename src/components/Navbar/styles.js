import { AppBar, styled } from '@mui/material';

export const NavbarWrapper = styled(AppBar)(
  ({ theme: { palette, breakpoints } }) => ({
    backgroundColor: 'unset',
    padding: '12px 45px',
    color: palette.common.white,
    textTransform: 'unset',
    [breakpoints.down('1050')]: {
      padding: '12px 10px',
    },
    [breakpoints.down('330')]: {
      padding: '12px 3px',
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
      padding:'4px 17px',
      '&:hover': {
        backgroundColor: '#f7d569',
        color: palette.text.primary,
      },
    },
  })
);

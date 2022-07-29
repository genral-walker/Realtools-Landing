import { styled, Box } from '@mui/material';
import Hero from 'assets/images/Hero.jpg';

export const HomeWrapper = styled(Box)(
  ({ theme: { breakpoints, palette } }) => ({
    background: `url(${Hero}) center no-repeat fixed`,
    backgroundSize: 'cover',
    height: '100vh',
    color: palette.common.white,
    [breakpoints.up('1400')]: {
      height: '75vh',
    },
    [breakpoints.up('1600')]: {
      height: '65vh',
    },
    [breakpoints.down('1000')]: {
      height: 'unset',
    },
    '.header': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      top: '80px',
      [breakpoints.down('1120')]: {
        top: '43px',
      },
      [breakpoints.down('1000')]: {
        paddingBottom: '115px',
      },
      [breakpoints.down('740')]: {
        paddingBottom: '120px !important',
        padding: '0 20px',
      },
      [breakpoints.down('550')]: {
        top: '45px',
      },
      '.h1': {
        fontWeight: 800,
        fontSize: '60px',
        lineHeight: 1.4,
        [breakpoints.down('740')]: {
          fontSize: '50px',
        },
        [breakpoints.down('615')]: {
          fontSize: '45px',
        },
        [breakpoints.down('340')]: {
          fontSize: '40px',
        },
      },
      '.text': {
        fontSize: '20px',
        margin: '10px 0 40px',
        width: '50%',
        [breakpoints.down('800')]: {
          width: '75%',
        },
        [breakpoints.down('550')]: {
          width: '100%',
          fontSize: '15px',
        },
      },
      button: {
        padding: '18px 50px',
      },
    },
  })
);

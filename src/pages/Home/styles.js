import { styled, Box } from '@mui/material';
import Hero from 'assets/images/Hero.jpg';

export const HomeWrapper = styled(Box)(
  ({ theme: { breakpoints, palette } }) => ({
    background: `url(${Hero}) center no-repeat fixed`,
    backgroundSize: 'cover',
    color: palette.common.white,

    '.header': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      marginTop: '80px',
      [breakpoints.down('900')]: {
        marginTop: '40px',
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
          width: '95%',
          fontSize: '15px',
        },
      },

      '.btns': {
        marginBottom: '145px',
        [breakpoints.down('1050')]: {
          marginBottom: '120x',
        },
        [breakpoints.down('900')]: {
          marginBottom: '80px',
        },
        button: {
          padding: '18px 50px',
        },
      },
    },

    main: {
      color: palette.text.primary,
    },
    '.featured': {
      background: palette.common.white,
      padding: '100px 20px',

      h2: {
        fontSize: '35px',
        fontWeight: 600,

        '&+p': {
          margin: '20px 25vw',
          [breakpoints.down('800')]: {
            margin: '20px 15vw',
          },
          [breakpoints.down('570')]: {
            margin: '20px 7vw',
          },
          [breakpoints.down('460')]: {
            margin: '20px 0',
          },
        },
      },
      '.swiper.swiper-initialized': {
        marginTop: '60px',
        paddingBottom: '75px',
        '.swiper-pagination-bullet': {
          width: '16px',
          height: '16px'
        },
      },
    },
  })
);

import { styled, Box } from '@mui/material';
import Hero from 'assets/images/Hero.jpg';
import activeBG from 'assets/images/listings-decorator.jpg';
import featuredBGDecorator from 'assets/images/featured-bg-decorator.svg';

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
      padding: '100px 20px 20px',

      '.swiper.swiper-initialized': {
        margin: '60px 20px 0',
        paddingBottom: '75px',
        '.swiper-pagination-bullet': {
          width: '16px',
          height: '16px',
        },
      },
    },

    '.active-section': {
      background: palette.common.white,
      padding: '10px 0 0',
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        height: 'calc(100% - 23px)',
        width: '13%',
        top: '23px',
        right: '0',
        background: `url(${activeBG}) top no-repeat`,
        backgroundSize: 'cover',

        [breakpoints.down('1250')]: {
          width: '12.5%',
        },
        [breakpoints.down('1050')]: {
          width: '11.8%',
        },
        [breakpoints.down('800')]: {
          top: '33px',
          height: 'calc(100% - 33px)',
        },
        [breakpoints.down('750')]: {
          width: '10.8%',
        },
        [breakpoints.down('650')]: {
          width: '10%',
        },
        [breakpoints.down('sm')]: {
          display: 'none',
        },
      },

      form: {
        margin: '40px auto',
        position: 'relative',
        zIndex: 300,
        [breakpoints.between('1400', '1600')]: {
          transform: 'translateX(-70px)',
        },
        [breakpoints.down('md')]: {
          width: '78% !important',
        },
        [breakpoints.down('sm')]: {
          width: 'unset !important',
          margin: '40px 25px 30px !important',
        },
      },

      '.MuiGrid-root.MuiGrid-container, .active-extended': {
        margin: '30px 5px 0 28px',
        width: '85%',
        [breakpoints.down('sm')]: {
          width: '100% !important',
          margin: '0',
          padding: '0 25px',
        },
      },
    },

    '.active-extended': {
      background: palette.common.white + ' !important',
      margin: 'unset !important',
      padding: '60px 0 70px !important',
      button: {
        marginLeft: '40px',
        [breakpoints.down('sm')]: {
          margin: '0',
        },
      },
    },

    '.sell-section': {
      background: palette.common.white,
      '& > div': {
        background: '#E8EFFF',
        borderRadius: '0px 0px 300px 0px',
        overflow: 'hidden',
        height: '700px',

        '& > div': {
          alignSelf: 'center',
          marginLeft: '50px',
          h2: {
            fontWeight: 700
          },
          p: {
            margin: '10px 0 25px',
            width: '70%'
          }

        }
      },
      button:{
        color: palette.common.white + ' !important',
      },
      img: {
        width: '550px',
        alignSelf: 'flex-end',
        marginRight: '80px',
      },
    },
  })
);

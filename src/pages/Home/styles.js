import { styled, Box } from '@mui/material';
import Hero from 'assets/images/Hero.jpg';
import activeBG from 'assets/images/listings-decorator.jpg';
import queriesBG from 'assets/icons/queries-bg.svg';
import featuredDecoratorBG from 'assets/icons/featured-decorator.svg';
import sellDecoratorBG from 'assets/icons/sell-decorator.svg';
import buySellDecoratorBG from 'assets/icons/sell-buy-bg-decorator.svg';

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
      [breakpoints.between('363', '393')]: {
        paddingLeft: '15px',
        paddingRight: '15px',
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
      position: 'relative',
      overflow: 'hidden',

      '.swiper.swiper-initialized': {
        margin: '60px 20px 0',
        paddingBottom: '75px',
        '.swiper-pagination-bullet': {
          width: '16px',
          height: '16px',
        },
      },

      '&::before': {
        content: '""',
        position: 'absolute',
        top: '-25px',
        left: '-40px',
        width: '230px',
        height: '230px',
        background: `url(${featuredDecoratorBG}) no-repeat`,
        backgroundSize: 'fill',
        transform: 'rotate(90deg)',
        [breakpoints.down(750)]: {
          display: 'none',
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
      padding: '60px 0 50px !important',
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
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: '-60px',
          left: '-10px',
          width: '230px',
          height: '230px',
          background: `url(${sellDecoratorBG}) no-repeat`,
          backgroundSize: 'fill',
          transform: 'rotate(5deg)',
          [breakpoints.down('800')]: {
            display: 'none',
          },
        },
        [breakpoints.down('lg')]: {
          height: '550px',
        },
        [breakpoints.down('900')]: {
          height: '500px',
        },
        [breakpoints.down('720')]: {
          padding: '60px 40px 0',
          height: 'max-content',
          borderRadius: '0',
          flexDirection: 'column',
          justifyContent: 'center !important',
          alignContent: 'center !important',
        },
        [breakpoints.down('sm')]: {
          padding: '60px 25px 0',
        },

        '& > div': {
          alignSelf: 'center',
          marginLeft: '50px',
          [breakpoints.down('lg')]: {
            marginLeft: '40px',
          },
          [breakpoints.down('720')]: {
            marginLeft: '0',
          },
          h2: {
            fontWeight: 700,
          },
          p: {
            margin: '10px 0 25px',
            width: '70%',
            [breakpoints.down('lg')]: {
              width: '100%',
            },
          },
        },
      },
      button: {
        color: palette.common.white + ' !important',
      },
      img: {
        width: '550px',
        alignSelf: 'flex-end',
        marginRight: '80px',
        [breakpoints.down('lg')]: {
          width: '500px',
          marginRight: '40px',
        },
        [breakpoints.down('900')]: {
          width: '400px',
          marginRight: '30px',
        },
        [breakpoints.down('720')]: {
          width: '80%',
          alignSelf: 'center',
          margin: '30px 0 0',
        },
        [breakpoints.down('450')]: {
          margin: '40px 0 0',
        },
      },
    },

    '.buy-section': {
      height: '700px',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '-20vw',
        left: '0',
        width: '100%',
        height: '135%',
        zIndex: '50',
        background: `url(${buySellDecoratorBG}) no-repeat`,
        backgroundSize: 'fill',
        [breakpoints.down('lg')]: {
          top: '-15vw',
        },
        [breakpoints.down(720)]: {
          top: '-70vw',
        },
      },
      [breakpoints.down('lg')]: {
        height: '550px',
      },
      [breakpoints.down('1100')]: {
        paddingRight: '40px',
      },
      [breakpoints.down('900')]: {
        height: '500px',
      },
      [breakpoints.down('720')]: {
        padding: '60px 40px 0',
        height: 'max-content',
        flexDirection: 'column',
      },
      [breakpoints.down('sm')]: {
        padding: '60px 25px 0',
      },

      '& > div': {
        alignSelf: 'center',
        marginLeft: '50px',
        [breakpoints.down('lg')]: {
          marginLeft: '40px',
        },
        [breakpoints.down('1100')]: {
          marginLeft: '0',
        },
        h2: {
          fontWeight: 700,
        },
        p: {
          margin: '10px 0 25px',
          width: '70%',
          [breakpoints.down('lg')]: {
            width: '100%',
          },
        },
      },
      button: {
        color: palette.common.white + ' !important',
        [breakpoints.between(720, 782)]: {
          marginBottom: '50px !important',
        },
      },
      img: {
        width: '550px',
        alignSelf: 'flex-end',
        [breakpoints.down('lg')]: {
          width: '500px',
          transform: 'translateX(20px)',
        },
        [breakpoints.down('900')]: {
          width: '400px',
          transform: 'translateX(10px)',
        },
        [breakpoints.down('720')]: {
          width: '80%',
          transform: 'translateX(0)',
          alignSelf: 'center',
          margin: '30px 0 0',
          order: 2,
        },
        [breakpoints.down('450')]: {
          margin: '40px 0 0',
        },
      },
    },

    '.learn-section': {
      background: '#1849C6',
      borderRadius: '300px 0px 0px 0px',
      padding: '90px 40px 60px',
      marginTop: '-11%',
      position: 'relative',
      zIndex: 600,

      [breakpoints.down('1000')]: {
        borderRadius: '180px 0px 0px 0px',
      },
      [breakpoints.down('800')]: {
        borderRadius: '150px 0px 0px 0px',
      },
      [breakpoints.down('sm')]: {
        padding: '90px 25px 60px',
      },
      [breakpoints.down('580')]: {
        borderRadius: '0',
      },
      [breakpoints.down('340')]: {
        padding: '90px 20px 60px',
      },
      'h2, p': {
        color: palette.common.white,
        textAlign: 'center',
        margin: '0 auto',
        width: '70%',
        [breakpoints.down('650')]: {
          width: '75%',
        },
        [breakpoints.down('580')]: {
          width: '100%',
        },
      },
      h2: {
        lineHeight: '50px',
      },
      p: {
        lineHeight: '30px',
        margin: '20px auto',
      },
      button: {
        [breakpoints.down('345')]: {
          padding: '15px 30px !important',
        },
      },
    },

    '.cta': {
      display: 'grid',
      placeItems: 'center',
      padding: '100px 0',
      background: `url(${queriesBG}), linear-gradient(to right, #add8e645, #add8e645) no-repeat`,
      backgroundSize: 'cover',
      [breakpoints.down('md')]: {
        backgroundSize: 'contain',
      },
      [breakpoints.between('850', 'md')]: {
        padding: '100px 20px',
      },
      [breakpoints.down(660)]: {
        padding: '70px 25px',
      },

      button: {
        alignSelf: 'center',
        svg: {
          width: '13px',
          marginLeft: '8px',
        },
      },
    },
  })
);

import { Stack, styled } from '@mui/material';
import ctaMailDecorator from 'assets/icons/cta-mail-decorator.svg';

export const CTAWrapper = styled(Stack)(
  ({ theme: { palette, breakpoints } }) => ({
    transform: 'translateX(-20px)',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '-45px',
      right: '70px',
      width: '120px',
      height: '100px',
      background: `url(${ctaMailDecorator}) no-repeat`,
      backgroundSize: 'fill',
    },
    '& > svg': {
      alignSelf: 'end',
      margin: '0 -62px -30px 0',
      [breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    [breakpoints.down('sm')]: {
      transform: 'translateX(0px)',
    },
    '.MuiPaper-root.MuiCard-root': {
      boxShadow: '0px 30px 40px rgba(24, 73, 198, 0.1)',
      borderRadius: '10px',
      padding: '50px 60px 55px',
      [breakpoints.down(960)]: {
        padding: '50px 40px 55px',
      },
      [breakpoints.down(850)]: {
        textAlign: 'center',
        '.flex-container': {
          flexDirection: 'column !important',
        },
      },
      [breakpoints.down(660)]: {
        padding: '50px 20px 55px',
      },
      [breakpoints.down('sm')]: {
        h2: {
          fontSize: '30px !important',
          marginBottom: '15px !important',
          lineHeight: '1.4',
        },
      },
      '.MuiCardContent-root': {
        paddingLeft: 0,
        [breakpoints.down(850)]: {
          paddingRight: 0,
        },
      },
      button: {
        color: palette.common.white + ' !important',
        fontSize: '16px !important',
        borderRadius: '10px',
        [breakpoints.down(850)]: {
          marginTop: '10px !important',
          marginLeft: '0 !important',
        },
      },
    },
  })
);

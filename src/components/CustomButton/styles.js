import { Button, styled } from '@mui/material';

export const ButtonWrapper = styled(Button)(
  ({ theme: { palette, breakpoints }, displaytype, buttonsize }) => ({
    background:
      displaytype === 'invert'
        ? palette.common.white
        : displaytype === 'secondary'
        ? palette.secondary.main
        : palette.primary.main,

    color: palette.text.primary + ' !important',
    padding:
      buttonsize === 'small'
        ? '5px 20px'
        : buttonsize === 'large'
        ? '15px 55px'
        : '10px 27px',

    borderRadius: '5px',
    textTransform: 'unset',
    [breakpoints.down('360')]: {
      fontSize: buttonsize === 'large' ? '13px' : '',
    },

    '&:hover': {
      backgroundColor: '#f7d569 !important',
    },
  })
);

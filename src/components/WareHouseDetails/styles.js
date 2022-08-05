import { Card, styled } from '@mui/material';

export const WareHouseDetailsWrapper = styled(Card)(
  ({ theme: { palette, breakpoints }, bg, boxshadow }) => ({
    border: '1px solid #F9F9F9',
    boxShadow: boxshadow ? '0px 20px 30px rgba(1, 31, 109, 0.4)' : '',
    borderRadius: '10px',
    background: bg ? '#F6F8FD' : '',
    paddingBottom: '18px',

    '.MuiCardMedia-root.MuiCardMedia-img ': {
      width: '90%',
      margin: '15px auto 17px',
      [breakpoints.down('sm')]: {
        width: '94%',
      }
    },

    '.MuiCardContent-root': {
      paddingTop: 0,
      h4: {
        fontSize: '23px',
        fontWeight: 600,
      },
    },
    '.btn-container': {
      button: {
        color: palette.common.white + ' !important',
        fontSize: '13px !important',
        width: '70%',
        borderRadius: '10px'
      },
    },
  })
);

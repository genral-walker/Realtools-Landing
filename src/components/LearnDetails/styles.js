import { Card, styled } from '@mui/material';

export const LearnDetailsWrapper = styled(Card)(
  ({ theme: { palette, breakpoints } }) => ({
    border: '1px solid #F9F9F9',
    borderRadius: '10px',
    background: palette.common.white,
    paddingBottom: '18px',

    '.MuiCardMedia-root.MuiCardMedia-img ': {
      width: '98%',
      margin: '2px auto 17px',
      [breakpoints.down('sm')]: {
        width: '94%',
      },
    },

    '.MuiCardContent-root': {
      padding: '0 13px',
      h4: {
        lineHeight: 1.3,
        fontSize: '20px',
        fontWeight: 600,

        '&+div': {
          p: {
            color: palette.text.primary,
            fontSize: '14px',
            width: 'max-content',
            marginLeft: '6px',
            [breakpoints.between(1200, 1280)]: {
              fontSize: '12px',
            },
            [breakpoints.down(1200)]: {
              fontSize: '15px',
            },
            [breakpoints.down('340')]: {
              fontSize: '12px',
            },
          },
        },
      },
    },
    '.btn-container': {
      button: {
        color: palette.common.white + ' !important',
        fontSize: '13px !important',
        width: '70%',
        borderRadius: '10px',
      },
    },
  })
);

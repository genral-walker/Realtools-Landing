import { Grid, styled } from '@mui/material';

export const FooterWrapper = styled(Grid)(
  ({ theme: { palette, breakpoints } }) => ({
    padding: '55px 70px 45px',
    background: palette.common.white,
    color: palette.text.primary,
    marginTop: '0px',
    '& *': {
      fontFamily: 'Roboto, sans-serif !important',
    },
    '& > div': {
      '&:not(:first-of-type)': {
        h4: {
          fontSize: '16px',
          fontWeight: 700,
          marginBottom: '8px',
        },
        '.MuiListItemButton-root.MuiButtonBase-root': {
          transform: 'translateX(-16px)',
          paddingTop: '3px',
          paddingBottom: '3px',
          '&:hover': {
            color: palette.primary.main,
          },
          '& *': {
            fontSize: '14px !important',
          },
        },
        '.MuiTypography-root.MuiListItemText-primary': {
          fontSize: '14px !important',
        },
      },

      '&:first-of-type': {
        h3: {
          fontSize: '22px',
          fontWeight: 700,
          fontFamily: 'Poppins, sans-serif !important',
        },
        '&>p:first-of-type': {
          lineHeight: '24px',
        },
      },

      '&:nth-of-type(3)': {
        '.MuiInputLabel-root.MuiInputLabel-formControl.MuiFormLabel-root': {
          fontSize: '14px !important',
        },
        '.MuiOutlinedInput-root.MuiInputBase-root.MuiInputBase-formControl': {
          borderRadius: '10px',
        },
        button: {
          marginTop: '10px',
          color: palette.common.white + ' !important',
        },
      },
      '&:nth-of-type(4)': {
        svg: {
          cursor: 'pointer',
        },
      },
    },
  })
);

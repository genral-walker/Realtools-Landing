import { AppBar, styled } from '@mui/material';
import { lime } from '@mui/material/colors';

export const DynamicNavWrapper = styled(AppBar)(
  ({ theme: { palette }, mobile }) => ({
    backgroundColor: 'unset',
    padding: '10px 20px 0',
    color: palette.common.white,
    textTransform: 'unset',
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
        padding: '25px 0'
      },
    },
    button: {
      textTransform: 'inherit',
      color: 'inherit',
      '&:hover': {
        backgroundColor: lime['A100'],
        color: palette.text.primary,
      },
    },
  })
);

import { Button, styled } from '@mui/material';
import { lime } from '@mui/material/colors';

export const ButtonWrapper = styled(Button)(
  ({ theme: { palette }, displaytype }) => ({
    background:
      displaytype === 'invert'
        ? palette.common.white
        : displaytype === 'secondary'
        ? palette.secondary.main
        : palette.primary.main,
    color: palette.text.primary,
    padding: '6px 20px',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: `${lime['A100']} !important`,
    },
  })
);

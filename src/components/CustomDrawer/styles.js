import { Drawer, styled } from '@mui/material';
import hero from 'assets/images/Hero.jpg';

export const DrawerWrapper = styled(Drawer)(({ theme: { palette } }) => ({
  '&.MuiDrawer-root.MuiDrawer-modal .MuiPaper-root': {
    background: `url(${hero}) bottom no-repeat fixed`,
    backgroundSize: 'cover',
    height: '100%',
  },
  '& .MuiBackdrop-root': {
    background: palette.text.primary,
    opacity: '.9 !important'
  },
  // padding: '12px 45px',
  // color: palette.common.white,
  // textTransform: 'unset',
  // a: {
  //   color: 'inherit',
  // },
  // '.hero': {
  //   svg: {
  //     alignSelf: 'center',
  //   },
  //   cursor: 'pointer',
  //   h3: {
  //     textTransform: 'capitalize',
  //     fontSize: '1.2rem'
  //   },
  // },
  // button: {
  //   textTransform: 'inherit',
  //   color: 'inherit',
  //   '&:hover': {
  //     backgroundColor: lime['A100'],
  //     color: palette.text.primary,
  //   },
  // },
}));

import { styled, Box } from '@mui/material';
import Hero from './../../assets/images/Hero.jpg';

export const HomeWrapper = styled(Box)(({ theme }) => ({
    background: `url(${Hero}) center no-repeat fixed`, 
    backgroundSize: 'cover',
    height: '100vh',  
    [theme.breakpoints.down('md')]: {
        height: '60vh',
    },
}));

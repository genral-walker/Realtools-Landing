import { Card, styled } from '@mui/material';

export const FormWrapper = styled(Card)(({ theme: { breakpoints } }) => ({
  '&.MuiPaper-root.MuiPaper-elevation': {
    width: 'max-content',
    padding: '20px 25px 30px 10px',
    borderRadius: '15px',
    boxShadow: '0px 5px 50px rgba(1, 31, 109, 0.1)',

    [breakpoints.down('1000')]: {
      padding: '20px 17px 30px 0px',
    },
    [breakpoints.down('md')]: {
      padding: '30px 40px 40px',
    },
    
  },
  label: {
    '&:first-of-type': {
      marginRight: '40px',
      [breakpoints.down('1000')]: {
        marginRight: '20px',
      },
      [breakpoints.down('920')]: {
        marginRight: '12px',
      },
      [breakpoints.down('md')]: {
        margin: 0
      },
    },
    '&:last-of-type': {
      marginRight: '42px',
      [breakpoints.down('1000')]: {
        marginRight: '22px',
      },
      [breakpoints.down('920')]: {
        marginRight: '10px',
      },
      [breakpoints.down('md')]: {
        marginRight: '0',
      },
    },
  },
  '.MuiOutlinedInput-root.MuiInputBase-root.MuiInputBase-formControl': {
    borderRadius: '6px',
    paddingTop: '6px',
    paddingBottom: '6px',
    position: 'relative',
    zIndex: 200,
    svg: {
      marginRight: '10px',
      '&:last-of-type': {
        marginLeft: '2px',
      },
    },
    '&>div':{
      [breakpoints.down('md')]: {
        width: '100%',
        padding: '20px 25px 30px 10px',
      },
    }
  },

  '.MuiFormControlLabel-label': {
    fontSize: '15px',
    alignSelf: 'start',
    marginBottom: '7px',
  },
  '.first': {
    width: '380px',
    [breakpoints.down('1270')]: {
      width: '330px',
    },
    [breakpoints.down('1080')]: {
      width: '270px',
    },
    [breakpoints.down('1000')]: {
      width: '250px',
    },
    [breakpoints.down('md')]: {
      width: '100%',
    },
  },
  
  '.MuiFormControl-root': { 
    [breakpoints.down('md')]: {
      width: '100%'
    },
  },
  '.MuiFormControlLabel-root': { 
    [breakpoints.down('md')]: {
      marginLeft: 'none !important'
    },
  },
  '.second, .third': {
    width: '200px',
    [breakpoints.down('1270')]: {
      width: '180px',
    },
    [breakpoints.down('md')]: {
      width: '100%',
    },
  },
  button: {
    alignSelf: 'center',
    transform: 'translateY(13px)',
    [breakpoints.down('md')]: {
      alignSelf: 'flex-end',
    },
    svg: {
      height: '14px',
      width: '15px',
    },
  },
}));

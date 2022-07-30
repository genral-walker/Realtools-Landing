import { Card, styled } from '@mui/material';

export const FormWrapper = styled(Card)(({ theme: { palette } }) => ({
  '&.MuiPaper-root.MuiPaper-elevation': {
    width: 'max-content',
    padding: '20px 25px 30px 10px',
    borderRadius: '15px',
    boxShadow: '0px 5px 50px rgba(1, 31, 109, 0.1)'
  },
  label: {
    '&:first-of-type': {
      marginRight: '40px',
    },
    '&:last-of-type': {
      marginRight: '42px',
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
        marginLeft: '2px'
      }
    },
  },

  '.MuiFormControlLabel-label': {
    fontSize: '15px',
    alignSelf: 'start',
    marginBottom: '7px',
  },
  '.first': {
    width: '380px',
  },
  '.second, .third': {
    width: '200px',
  },
  button: {
    alignSelf: 'center',
    transform: 'translateY(13px)',
    svg: {
      height: '14px',
      width: '15px',
    },
  },
}));

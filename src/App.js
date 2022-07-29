import { ThemeProvider } from '@mui/material';
import inputGlobalStyles from 'App.style';
import THEME from 'constants/theme';
import { Home } from 'pages';


function App() {
  return (
    <ThemeProvider theme={THEME}>
      {inputGlobalStyles}
      <Home />
    </ThemeProvider>
  );
}

export default App;

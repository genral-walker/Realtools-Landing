import { GlobalStyles, ThemeProvider } from '@mui/material';
import THEME from 'constants/theme';
import { Home } from 'pages';

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyles
        styles={{
          '*, *::before, *::after': {
            letterSpacing: '1px',
          },
          body: {
            margin: 0,
            padding: 0,
          },
        }}
      />
      <Home />
    </ThemeProvider>
  );
}

export default App;

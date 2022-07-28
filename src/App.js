import { ThemeProvider } from '@mui/material';
import THEME from 'constants/theme';
import { Home } from 'pages';

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Home />
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import Routes from '@routes';
import { theme } from '@styles/theme';
import { ThemeProvider } from 'styled-components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};
export default App;

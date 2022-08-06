import React from 'react';
import Routes from '@routes';
import { theme } from '@styles/theme';
import { ThemeProvider } from 'styled-components';
import ReactQueryProvider from '@services/react-query';

const App = () => {
  return (
    <ReactQueryProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </ReactQueryProvider>
  );
};
export default App;

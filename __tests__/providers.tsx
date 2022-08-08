import React, { PropsWithChildren, ReactElement } from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@styles/theme';

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement) => render(ui, { wrapper: AllTheProviders });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };

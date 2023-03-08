import React from 'react';
import { ThemeProvider as BaseThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#0D4DF2',
    secondary: '#9EB8FA',
    successful: '#AEEAB0',
    error: '#FE9C9A',
    background: '#0D0D0D',
  },
  spaces: {
    s0: 0,
    s05: 0.5,
    s1: 2,
    s2: 4,
    s3: 6,
    s4: 8,
    s5: 10,
    s6: 12,
    s7: 14,
    s8: 16,
    s9: 18,
    s10: 20,
    s11: 22,
    s12: 24,
    s13: 26,
    s14: 28,
    s15: 30,
    s16: 32,
    s17: 34,
    s18: 36,
    s19: 38,
    s20: 40,
  }
}
type TProps = {
  children: React.ReactNode;
}
const ThemeProvider = React.memo<TProps>(({ children }) => <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>);

export default ThemeProvider;

import React from 'react';
import 'styled-components';
import { createGlobalStyle, ThemeProvider as BaseThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#0D4DF2',
    onPrimary: '#FFFFFF',
    secondary: '#9EB8FA',
    successful: '#AEEAB0',
    error: '#FE9C9A',
    background: '#0D0D0D',
    onBackground: '#FFFFFF',
    surface: '#17181C',
    onSurface: '#C7C9D1',
  },
  fontSizes: {
    fz12: '12px',
    fz13: '13px',
    fz14: '14px',
    fz16: '16px',
    fz18: '18px',
    fz20: '20px',
    fz24: '24px',
    fz28: '28px',
    fz32: '32px',
    fz36: '36px',
    fz44: '44px',
    fz56: '56px',
    fz64: '64px',
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
    s21: 42,
    s22: 44,
    s23: 46,
    s24: 48,
    s25: 50,
    s26: 52,
    s27: 54,
    s28: 56,
    s29: 58,
    s30: 60,
    s31: 62,
    s32: 64,
    s35: 70,
    s36: 72,
    s37: 74,
    s40: 80,
    s41: 82,
    s42: 84,
    s43: 86,
    s44: 88,
    s45: 90,
    s60: 120,
    s64: 128,
  }
} as const;

export type TTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends TTheme { }
}

type TProps = {
  children: React.ReactNode;
}
const GlobalStyle = createGlobalStyle<{ theme: typeof theme }>`
  body {
    color: ${props => props.theme.colors.background};
    height: 100%;
    min-height: 100vh;
  }
input {
  outline: none;
  border:none;
  background-image:none;
  background-color:transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;  
}
button {
  outline: none;
  border:none;
  background-image:none;
  background-color:transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;  
  }
  `
const ThemeProvider = React.memo<TProps>(({ children }) =>
  <BaseThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </BaseThemeProvider>
);

export default ThemeProvider;

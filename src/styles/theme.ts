import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  grid: {
    container: '110rem',
    gutter: '2.4rem'
  },
  border: {
    radius: {
      small: '1.5rem',
      medium: '2.8rem'
    }
  },
  font: {
    family:
      "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    medium: 500,
    bold: 700,
    extraBold: 800,
    sizes: {
      small: '1.6rem',
      medium: '1.8rem',
      large: '2.4rem',
      xlarge: '3.2rem',
      xxlarge: '4.0rem',
      huge: '5.6rem'
    }
  },
  lineHeights: {
    medium: '2.8rem',
    large: '2.8rem',
    xlarge: '4.0rem',
    xxlarge: '5.1rem',
    huge: '7.0rem'
  },
  colors: {
    primary: '#F74780',
    secondary: '#13183F',
    lightPurple: '#666CA3',
    gray: '#83869A',
    white: '#FFFFFF',
    pink: '#FFA7C3',
    primaryGradient: '180deg, #FF6F48 0.04%, #F02AA6 100%',
    secundaryGradient: '180deg, #4851FF 0%, #F02AA6 99.92%'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
};

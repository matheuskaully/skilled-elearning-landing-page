// import original module declarations
import 'styled-components';

interface Border {
  radius: Radius;
}

interface Radius {
  small: string;
  medium: string;
}

interface Colors {
  primary: string;
  dark: string;
  lightPurple: string;
  gray: string;
  white: string;
  pink: string;
  primaryGradient: string;
  secundaryGradient: string;
}

interface Font {
  family: string;
  medium: number;
  bold: number;
  extraBold: number;
  sizes: LineHeights;
}

interface LineHeights {
  small?: string;
  medium: string;
  large: string;
  xlarge: string;
  xxlarge: string;
  huge: string;
}

interface Grid {
  container: string;
  gutter: string;
}

interface Layers {
  base: number;
  menu: number;
  overlay: number;
  modal: number;
  alwaysOnTop: number;
}

interface Spacings {
  xxsmall: string;
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
  xxlarge: string;
}

interface Transition {
  default: string;
  fast: string;
}

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    grid: Grid;
    border: Border;
    font: Font;
    lineHeights: LineHeights;
    colors: Colors;
    spacings: Spacings;
    layers: Layers;
    transition: Transition;
  }
}

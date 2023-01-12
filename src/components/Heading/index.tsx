import styled, { css, DefaultTheme } from 'styled-components';

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}

const modifiers = {
  h1: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
    line-height: ${theme.lineHeights.huge};
  `,
  h2: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
    line-height: ${theme.lineHeights.xxlarge};
  `,
  h3: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    line-height: ${theme.lineHeights.xlarge};
  `,
  h4: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.lineHeights.large};
  `
};

export const Heading = styled('h1').attrs<HeadingProps>(({ as = 'h1' }) => {
  as;
})<HeadingProps>`
  ${({ theme, as = 'h1' }) => css`
    color: ${theme.colors.secondary};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.extraBold};
    ${modifiers[as](theme)}
  `}
`;

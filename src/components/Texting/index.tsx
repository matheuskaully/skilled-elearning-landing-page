import styled, { css, DefaultTheme } from 'styled-components';

interface TextingProps {
  size?: 'small' | 'medium';
}

const modifiers = {
  p: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray};
    font-weight: ${theme.font.medium};
  `
  // p2: (theme: DefaultTheme) => css`
  //   font-size: ${theme.font.sizes.small};
  //   color: ${theme.colors.gray};
  //   font-weight: ${theme.font.bold};
  // `
};

export const Texting = styled('p').attrs<TextingProps>(({ as = 'p' }) => {
  as;
})<TextingProps>`
  ${({ theme, as = 'p' }) => css`
    line-height: ${theme.lineHeights.medium};
    ${modifiers[as](theme)}
  `}
`;

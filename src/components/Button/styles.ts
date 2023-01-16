import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

type ButtonStyleProps = Pick<ButtonProps, 'variant'>;

const modifiers = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primaryGradient};
    :hover {
      opacity: 80%;
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.secundaryGradient};
    :hover {
      opacity: 50%;
    }
  `,
  dark: (theme: DefaultTheme) => css`
    background: ${theme.colors.dark};

    :hover {
      background: ${theme.colors.lightPurple};
    }
  `
};

export const Button = styled.button<ButtonStyleProps>`
  ${({ theme, variant = 'primary' }) => css`
    ${!!variant && modifiers[variant](theme)}

    line-height: 2.4rem;
    border-radius: 28px;
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    border: none;
    font-size: 18px;
    font-weight: 700;

    letter-spacing: 0px;
    color: ${theme.colors.white};

    cursor: pointer;
    transition: background ${theme.transition.default};
  `}
`;

import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.header`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    width: 100%;
    margin-top: ${theme.spacings.medium};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-inline: auto;
    padding-inline: ${theme.spacings.xsmall};

    ${media.lessThan('medium')`
      margin-top: ${theme.spacings.small};
    `}

    ${media.lessThan('small')`
      margin-top: ${theme.spacings.xsmall};
    `}
  `}
`;

export const Cards = styled.div`
  display: flex;
`;

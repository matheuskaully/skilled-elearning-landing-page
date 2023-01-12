import styled, { css } from 'styled-components';

interface ButtonProps {
  backgroundColor: string;
  hoverColor: string;
}

export const Button = styled.button<ButtonProps>` 
  background: ${(props) => props.backgroundColor};
  
  &:hover {
    background: ${(props) => props.hoverColor};
  }

  ${({ theme }) => css`
    width: 167px;
    height: 56px;
    border-radius: 28px;
    border: none;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0px;
    color: ${theme.colors.white};
    
    cursor: pointer;

    &:hover {
      opacity: 80%;
      transition: ${theme.transition.fast};
      background: ${theme.colors.lightPurple};
    }
  `}
`;

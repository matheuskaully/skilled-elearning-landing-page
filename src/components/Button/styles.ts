import styled from 'styled-components';

export const Button = styled.button`
  width: 167px;
  height: 56px;
  border-radius: 28px;
  border: none;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0px;
  color: var(--white);

  cursor: pointer;

  &:hover {
    opacity: 80%;
    transition: 200ms;
  }
`;

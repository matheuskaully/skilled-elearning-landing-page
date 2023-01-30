import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow-x: hidden;
`;

export const Image = styled.img`
  position: absolute;
  top: -123px;
  right: -346px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
`;

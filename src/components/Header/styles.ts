import styled from "styled-components"

export const Container = styled.header`
  background: var(--purple);

  h1 {
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  button {
    background: var(--gradient2);
    padding: 100px;

    :hover {
      filter: brightness(1.1);
      transition: 200ms;
      cursor: pointer;
    }
  }
`
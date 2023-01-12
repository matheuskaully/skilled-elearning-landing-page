import { screen } from '@testing-library/react';
import { it, expect } from 'vitest';
import { Heading } from '.';
import { renderWithTheme } from '../../styles/renderTheme';

it('should render heading with text Hello World', () => {
  renderWithTheme(<Heading>Hello World</Heading>);

  const header = screen.getByRole('heading', { name: 'Hello World' });

  expect(header).toBeInTheDocument();
  expect(header).toHaveStyle({ color: '#13183F' });

  screen.debug();
});

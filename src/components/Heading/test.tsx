import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { it, expect, describe } from 'vitest';
import { Heading } from '.';
import { renderWithTheme } from '../../styles/renderTheme';

describe('Heading', () => {
  it('should render heading with text Hello World', () => {
    renderWithTheme(<Heading>Hello World</Heading>);

    const header = screen.getByRole('heading', { name: 'Hello World' });

    expect(header).toBeInTheDocument();
  });

  it('should render correct styles for h1', () => {
    renderWithTheme(<Heading>Hello World</Heading>);

    const header = screen.getByRole('heading', { name: 'Hello World' });

    expect(header).toHaveStyleRule('font-size', theme.font.sizes.huge);
    expect(header).toHaveStyleRule('line-height', theme.lineHeights.huge);
  });

  it('should render correct styles for h2', () => {
    renderWithTheme(<Heading as="h2">Hello World</Heading>);

    const header = screen.getByRole('heading', { name: 'Hello World' });

    expect(header).toHaveStyleRule('font-size', theme.font.sizes.xxlarge);
    expect(header).toHaveStyleRule('line-height', theme.lineHeights.xxlarge);
  });

  it('should render correct styles for h3', () => {
    renderWithTheme(<Heading as="h3">Hello World</Heading>);

    const header = screen.getByRole('heading', { name: 'Hello World' });

    expect(header).toHaveStyleRule('font-size', theme.font.sizes.xlarge);
    expect(header).toHaveStyleRule('line-height', theme.lineHeights.xlarge);
  });

  it('should render correct styles for h3', () => {
    renderWithTheme(<Heading as="h4">Hello World</Heading>);

    const header = screen.getByRole('heading', { name: 'Hello World' });

    expect(header).toHaveStyleRule('font-size', theme.font.sizes.large);
    expect(header).toHaveStyleRule('line-height', theme.lineHeights.large);
  });
});

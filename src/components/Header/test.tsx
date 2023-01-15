import { screen } from '@testing-library/react';

import Header from '.';

import { renderWithTheme } from '../../styles/renderTheme';

describe('Header', () => {
  it('should render header component', () => {
    const { container } = renderWithTheme(<Header />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render image', () => {
    renderWithTheme(<Header />);

    const image = screen.getByRole('img', { name: 'skilled' });

    expect(image).toHaveAttribute('src', '/src/assets/logo-dark.svg');
  });

  it('should render button', () => {
    renderWithTheme(<Header />);

    const button = screen.getByRole('button', { name: 'Get Started' });

    expect(button).toBeInTheDocument();
  });
});

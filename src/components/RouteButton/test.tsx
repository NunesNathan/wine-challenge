import { screen } from '@testing-library/react';
import renderRight from 'utils/test';
import RouteButton from '.';

describe('<RouteButton />', () => {
  it('should render the RouteButton disable correctly', () => {
    renderRight(<RouteButton where="Loja" />);

    const button = screen.getByRole('button', {
      name: 'Loja',
    });

    expect(button).toHaveStyle({
      color: '#555',
      border: 'none',
    });
  });

  it('should render the RouteButton enable correctly', () => {
    renderRight(<RouteButton where="Loja" enable />);

    const button = screen.getByRole('button', {
      name: 'Loja',
    });

    expect(button).toHaveStyle({
      color: '#d14b8f',
      'margin-top': '2.9rem',
      'padding-bottom': '2.8rem',
      'border-bottom': '2px solid #d14b8f',
    });
  });
});

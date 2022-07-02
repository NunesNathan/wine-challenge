import { screen } from '@testing-library/react';
import renderRight from 'utils/test';
import Filter from '.';

describe('<Filter />', () => {
  it('should render the heading', () => {
    renderRight(<Filter />);

    const h3 = screen.getByRole('heading', {
      name: /Refine sua busca/,
      level: 3,
    });

    expect(h3).toBeInTheDocument();
  });

  it('should render the color correctly', () => {
    renderRight(<Filter />);

    const h3 = screen.getByRole('heading', {
      name: /Refine sua busca/,
      level: 3,
    });

    expect(h3).toHaveStyle({
      color: '#000',
    });
  });
});

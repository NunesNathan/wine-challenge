import { screen } from '@testing-library/react';
import renderRight from 'utils/test';
import Filter from '.';

describe('<Filter />', () => {
  it('should render the heading 3 correctly', () => {
    renderRight(<Filter />);

    const h3 = screen.getByRole('heading', {
      name: 'Refine sua busca',
      level: 3,
    });

    expect(h3).toBeInTheDocument();
  });

  it('should render the color correctly', () => {
    renderRight(<Filter />);

    const h3 = screen.getByRole('heading', {
      name: 'Refine sua busca',
      level: 3,
    });

    expect(h3).toHaveStyle({
      color: '#000',
    });
  });

  it('should render the heading 4 color correctly', () => {
    renderRight(<Filter />);

    const h3 = screen.getByRole('heading', {
      name: 'Por preço',
      level: 4,
    });

    expect(h3).toHaveStyle({
      color: '#333',
    });
  });

  it('should render the filters correctly', () => {
    renderRight(<Filter />);

    const radio = screen.getByRole('radio', {
      name: /Até R\$40/,
    });
    const radio2 = screen.getByRole('radio', {
      name: /R\$40 A R\$60/,
    });
    const radio3 = screen.getByRole('radio', {
      name: /R\$100 A R\$200/,
    });
    const radio4 = screen.getByRole('radio', {
      name: /R\$200 A R\$500/,
    });
    const radio5 = screen.getByRole('radio', {
      name: /Acima de R\$500/,
    });

    expect(radio).toBeInTheDocument();
    expect(radio).not.toBeChecked();
    expect(radio2).toBeInTheDocument();
    expect(radio2).not.toBeChecked();
    expect(radio3).toBeInTheDocument();
    expect(radio3).not.toBeChecked();
    expect(radio4).toBeInTheDocument();
    expect(radio4).not.toBeChecked();
    expect(radio5).toBeInTheDocument();
    expect(radio5).not.toBeChecked();
  });
});

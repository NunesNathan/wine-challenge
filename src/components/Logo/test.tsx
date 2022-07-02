import { screen } from '@testing-library/react';
import renderRight from 'utils/test';
import Logo from '.';

describe('<Logo />', () => {
  it('should render the empty logo', () => {
    renderRight(<Logo />);

    const logo = screen.getByLabelText(/Sacola da Wine está vazia!/);

    expect(logo).toBeInTheDocument();
  });

  it('should render the logo with one item', () => {
    renderRight(<Logo count={1} />);

    const logo = screen.getByLabelText(/Sacola da Wine com um item./);

    expect(logo).toBeInTheDocument();
  });

  it('should render the logo with many items', () => {
    renderRight(<Logo count={13} />);

    const logo = screen.getByLabelText(/Sacola da Wine com 13 items./);

    expect(logo).toBeInTheDocument();
  });
});

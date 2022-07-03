import { screen } from '@testing-library/react';
import renderRight from 'utils/tests/test';
import CartIcon from '.';

describe('<CartIcon />', () => {
  it('should render the empty CartIcon', () => {
    renderRight(<CartIcon />);

    const cartIcon = screen.getByLabelText(/Sacola da Wine está vazia!/);

    expect(cartIcon).toBeInTheDocument();
  });

  it('should render the CartIcon with one item', () => {
    renderRight(<CartIcon count={1} />);

    const cartIcon = screen.getByLabelText(/Sacola da Wine com um item./);

    expect(cartIcon).toBeInTheDocument();
  });

  it('should render the CartIcon with many items', () => {
    renderRight(<CartIcon count={13} />);

    const cartIcon = screen.getByLabelText(/Sacola da Wine com 13 items./);

    expect(cartIcon).toBeInTheDocument();
  });
});

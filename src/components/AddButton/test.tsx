import { screen } from '@testing-library/react';
import renderRight from 'utils/tests/test';
import AddButton from '.';

describe('<AddButton />', () => {
  it('should render the AddButton', () => {
    renderRight(<AddButton />);

    const addButton = screen.getByText('ADICIONAR');

    expect(addButton).toBeInTheDocument();
  });

  it('should render the button style', () => {
    renderRight(<AddButton />);

    const addButton = screen.getByText('ADICIONAR');

    expect(addButton).toHaveStyle({
      background: 'none',
    });
  });
});

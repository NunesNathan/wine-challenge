import { screen } from '@testing-library/react';
import renderRight from 'utils/test';
import Logo from '.';

describe('<Logo />', () => {
  it('should render the Logo', () => {
    renderRight(<Logo />);

    const logo = screen.getByLabelText(
      'Logo da Wine onde há seu nome escrito.',
    );

    expect(logo).toBeInTheDocument();
  });
});

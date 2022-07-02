import { screen } from '@testing-library/react';
import renderRight from 'utils/test';
import Header from '.';

describe('<Header />', () => {
  it('should render the Header correctly', () => {
    renderRight(<Header />);

    const header = screen.getByRole('banner');

    expect(header).toHaveStyle({
      'background-color': '#fff',
      display: 'flex',
    });
  });
});

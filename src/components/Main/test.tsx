import { render, screen } from '@testing-library/react';
import Main from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />);

    expect(
      screen.getByRole('heading', { name: /Winebox enthusiast/i }),
    ).toBeInTheDocument();
  });

  it('should render the colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#dedede' });
  });
});

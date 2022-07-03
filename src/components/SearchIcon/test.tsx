import { screen } from '@testing-library/react';
import renderRight from 'utils/tests/test';
import SearchIcon from '.';

describe('<SearchIcon />', () => {
  it('should render the SearchIcon', () => {
    renderRight(<SearchIcon />);

    const searchIcon = screen.getByLabelText('Icone de lupa para pesquisas.');

    expect(searchIcon).toBeInTheDocument();
  });
});

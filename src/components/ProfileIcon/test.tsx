import { screen } from '@testing-library/react';
import renderRight from 'utils/tests/test';
import ProfileIcon from '.';

describe('<ProfileIcon />', () => {
  it('should render the ProfileIcon', () => {
    renderRight(<ProfileIcon />);

    const profileIcon = screen.getByLabelText('Icone de perfil Wine.');

    expect(profileIcon).toBeInTheDocument();
  });
});

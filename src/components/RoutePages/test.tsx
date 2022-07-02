import { screen } from '@testing-library/react';
import renderRight from 'utils/test';
import RoutePages from '.';

describe('<RoutePages />', () => {
  it('should render the RoutePages correctly', () => {
    renderRight(<RoutePages />);

    const club = screen.getByRole('button', {
      name: 'Clube',
    });
    const shop = screen.getByRole('button', {
      name: 'Loja',
    });
    const producers = screen.getByRole('button', {
      name: 'Produtores',
    });
    const offers = screen.getByRole('button', {
      name: 'Ofertas',
    });
    const events = screen.getByRole('button', {
      name: 'Eventos',
    });

    expect(club).toBeInTheDocument();
    expect(shop).toBeInTheDocument();
    expect(producers).toBeInTheDocument();
    expect(offers).toBeInTheDocument();
    expect(events).toBeInTheDocument();
  });
});

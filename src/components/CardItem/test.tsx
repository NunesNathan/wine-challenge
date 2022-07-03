import { screen } from '@testing-library/react';
import renderRight from 'utils/tests/test';
import { memberPrices, addComma } from 'utils/helpers';
import data, { IVine } from '../../utils/tests/wineMock';
import CardItem from '.';

describe('<CardItem />', () => {
  const MockedWine: IVine = data.items[3];
  const { beforeComma, afterComma } = memberPrices(MockedWine.priceMember);
  it('should render the item Image', () => {
    renderRight(<CardItem item={MockedWine} />);

    const image = screen.getByAltText(`Imagem do vinho ${MockedWine.name}`);

    expect(image).toBeInTheDocument();
  });

  it('should render the item name', () => {
    renderRight(<CardItem item={MockedWine} />);

    const name = screen.getByText(MockedWine.name);

    expect(name).toBeInTheDocument();
  });

  it('should render the item discount', () => {
    renderRight(<CardItem item={MockedWine} />);

    const originalPrice = screen.getByText(`R$ ${addComma(MockedWine.price)}`);
    const off = screen.getByText(`${MockedWine.discount}% OFF`);

    expect(originalPrice).toBeInTheDocument();
    expect(originalPrice).toHaveStyle({
      'text-decoration-line': 'line-through',
    });
    expect(off).toBeInTheDocument();
    expect(off).toHaveStyle({
      'background-color': '#f79552',
    });
  });

  it('should render the item member price', () => {
    renderRight(<CardItem item={MockedWine} />);

    const text = screen.getByText('SÓCIO WINE');
    const rs = screen.getByText('R$');
    const price = screen.getByText(`${beforeComma},`);
    const price2 = screen.getByText(`${afterComma}`);

    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle({
      color: '#1d1d1b',
    });
    expect(price).toBeInTheDocument();
    expect(rs).toBeInTheDocument();
    expect(price).toHaveStyle({
      color: '#b6116e',
    });
    expect(price2).toBeInTheDocument();
  });

  it('should render the item nonmember price', () => {
    renderRight(<CardItem item={MockedWine} />);

    const nonMember = screen.getByText(
      `NÃO SÓCIO R$ ${addComma(MockedWine.priceNonMember)}`,
    );

    expect(nonMember).toBeInTheDocument();
    expect(nonMember).toHaveStyle({
      color: '#888',
    });
  });
});

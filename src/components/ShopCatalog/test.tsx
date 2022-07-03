import { screen } from '@testing-library/react';
import renderRight from 'utils/tests/test';
import data, { IFetchData } from 'utils/tests/wineMock';
import ShopCatalog from '.';

describe('<ShopCatalog />', () => {
  const mockedData: IFetchData = data;
  it('should render the ShopCatalog', () => {
    renderRight(<ShopCatalog data={mockedData} />);

    const aside = screen.getByRole('complementary');
    const itemList = screen.getByRole('list');

    expect(aside).toBeInTheDocument();
    expect(itemList).toBeInTheDocument();
  });
});

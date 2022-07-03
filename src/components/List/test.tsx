import { screen } from '@testing-library/react';
import renderRight from 'utils/tests/test';
import data, { IFetchData } from 'utils/tests/wineMock';
import List from '.';

describe('<List />', () => {
  const mockedData: IFetchData = data;
  it('should render the counter', () => {
    renderRight(<List data={mockedData} />);

    const count = screen.getByText(5);

    expect(count).toBeInTheDocument();
  });

  it('should render the many items counter', () => {
    renderRight(<List data={mockedData} />);

    const text = screen.getByText('produtos encontrados');

    expect(text).toBeInTheDocument();
  });

  it('should render the one item counter', () => {
    mockedData.totalItems = 1;
    renderRight(<List data={mockedData} />);

    const text = screen.getByText('produto encontrado');

    expect(text).toBeInTheDocument();
  });

  it('should render the one item counter', () => {
    renderRight(<List data={mockedData} />);

    const itemList = screen.getByRole('list');

    expect(itemList).toBeInTheDocument();
  });
});

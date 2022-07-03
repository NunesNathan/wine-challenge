import Filter from 'components/Filter';
import List from 'components/List';
import { IFetchData } from 'utils/tests/wineMock';
import S from './styles';

interface IShopCatalog {
  data: IFetchData;
}

export default function ShopCatalog({ data }: IShopCatalog) {
  return (
    <S>
      <Filter />
      <List data={data} />
    </S>
  );
}

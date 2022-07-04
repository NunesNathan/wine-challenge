import ItemList from 'components/ItemList';
import { IFetchData } from 'utils/tests/wineMock';
import * as S from './styles';

interface IList {
  data: IFetchData;
}

export default function List({ data }: IList) {
  return (
    <S.wrapper>
      <div>
        <S.counter>{data.totalItems}</S.counter>
        <S.text>
          {data.totalItems !== 1
            ? 'produtos encontrados'
            : 'produto encontrado'}
        </S.text>
      </div>
      <ItemList items={data.items} />
    </S.wrapper>
  );
}

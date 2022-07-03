import CardItem from 'components/CardItem';
import { IVine } from 'utils/tests/wineMock';
import S from './styles';

export interface IItemListProps {
  items: IVine[];
}

export default function ItemList({ items }: IItemListProps) {
  return (
    <S>
      {items.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </S>
  );
}

import { memberPrices, addComma } from 'utils/helpers';
import { IVine } from 'utils/tests/wineMock';
import * as S from './styles';

export interface ICardItemProps {
  item: IVine;
}

export default function CardItem({ item }: ICardItemProps) {
  const { beforeComma, afterComma } = memberPrices(item.priceMember);
  return (
    <S.wrapper>
      <S.img alt={`Imagem do vinho ${item.name}`} src={item.image} />
      <S.name>{item.name}</S.name>
      <S.container>
        <S.originalPrice>R$ {addComma(item.price)}</S.originalPrice>
        <S.off>{item.discount}% OFF</S.off>
      </S.container>
      <S.container>
        <S.member>SÓCIO WINE</S.member>
        <S.memberPrice>R$ </S.memberPrice>
        <S.memberPrice upper>{beforeComma},</S.memberPrice>
        <S.memberPrice>{afterComma}</S.memberPrice>
      </S.container>
      <S.nonMemberPrice>
        NÃO SÓCIO R$ {addComma(item.priceNonMember)}
      </S.nonMemberPrice>
    </S.wrapper>
  );
}

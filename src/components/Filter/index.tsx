import FilterRadio from 'components/FilterRadio';
import * as S from './styles';

const Filter = () => (
  <S.Wrapper>
    <S.title>Refine sua busca</S.title>
    <S.type>Por preço</S.type>
    <FilterRadio filter="Até R$40" />
    <FilterRadio filter="R$40 A R$60" />
    <FilterRadio filter="R$100 A R$200" />
    <FilterRadio filter="R$200 A R$500" />
    <FilterRadio filter="Acima de R$500" />
  </S.Wrapper>
);

export default Filter;

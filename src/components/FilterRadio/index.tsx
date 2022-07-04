import * as S from './styles';

interface IFilterRadioProps {
  filter: string;
}

const FilterRadio = ({ filter }: IFilterRadioProps) => (
  <S.Wrapper htmlFor={filter}>
    <input type="radio" id={filter} name="price-filter" />
    <S.text>{filter}</S.text>
  </S.Wrapper>
);

export default FilterRadio;

import RoutePages from 'components/RoutePages';
import CartIcon from 'components/CartIcon';
import Logo from 'components/Logo';
import ProfileIcon from 'components/ProfileIcon';
import SearchIcon from 'components/SearchIcon';
import * as S from './styles';

export default function Header() {
  return (
    <S.wrapper>
      <Logo />
      <RoutePages />
      <S.buttons>
        <SearchIcon />
        <ProfileIcon />
        <CartIcon />
      </S.buttons>
    </S.wrapper>
  );
}

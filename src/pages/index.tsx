import Filter from 'components/Filter';
import CartIcon from 'components/CartIcon';
import Logo from 'components/Logo';
import ProfileIcon from 'components/ProfileIcon';
import SearchIcon from 'components/SearchIcon';

export default function Home() {
  return (
    <>
      <SearchIcon />
      <ProfileIcon />
      <Logo />
      <CartIcon />
      <Filter />
    </>
  );
}

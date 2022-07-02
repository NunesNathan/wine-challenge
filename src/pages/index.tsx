import Filter from 'components/Filter';
import CartIcon from 'components/CartIcon';
import Logo from 'components/Logo';
import ProfileIcon from 'components/ProfileIcon';

export default function Home() {
  return (
    <>
      <ProfileIcon />
      <Logo />
      <CartIcon />
      <Filter />
    </>
  );
}

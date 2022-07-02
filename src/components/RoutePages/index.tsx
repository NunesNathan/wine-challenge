import RouteButton from 'components/RouteButton';
import S from './styles';

export default function RoutePages() {
  return (
    <S>
      <RouteButton where="Clube" />
      <RouteButton where="Loja" enable />
      <RouteButton where="Produtores" />
      <RouteButton where="Ofertas" />
      <RouteButton where="Eventos" />
    </S>
  );
}

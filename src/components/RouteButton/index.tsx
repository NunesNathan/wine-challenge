import S from './styles';

interface IRouteButtonProps {
  where: string;
  enable?: boolean;
}

export default function RouteButton({
  where,
  enable = false,
}: IRouteButtonProps) {
  return <S enable={enable}>{where}</S>;
}

import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const { push } = useRouter();

  useEffect(() => {
    push('/loja-vinhos');
  });

  return <h1>Carregando...</h1>;
}

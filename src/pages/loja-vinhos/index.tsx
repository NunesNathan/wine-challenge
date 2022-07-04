import Header from 'components/Header';
import getWines from 'services/wineAPI';
import ShopCatalog from 'components/ShopCatalog';
import { GetStaticProps } from 'next';
import { IFetchData } from 'utils/tests/wineMock';

interface IHome {
  data: IFetchData | [];
}

export default function Home({ data }: IHome) {
  return (
    <>
      <Header />
      <>
        {data instanceof Array ? (
          <main>
            <h2>Carregando...</h2>
          </main>
        ) : (
          <ShopCatalog data={data} />
        )}
      </>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    data: (await getWines()) || [],
  },
  revalidate: 60 * 60,
});

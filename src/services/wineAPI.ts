import { IFetchData } from 'utils/tests/wineMock';

const getWines = async (page = 1, limit = 9): Promise<IFetchData | null> => {
  const FETCH_URL = `https://wine-back-test.herokuapp.com/products?page=${page}&limit=${limit}`;
  const data = await (await fetch(FETCH_URL)).json();

  return data;
};

export default getWines;

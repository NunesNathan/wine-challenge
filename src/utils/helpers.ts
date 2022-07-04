export const memberPrices = (price: number) => {
  const beforeComma = Number(
    price
      .toFixed(2)
      .toString()
      .match(/^\d[^,]/),
  );
  const afterComma = Number(
    price
      .toFixed(2)
      .toString()
      .match(/[^,]\d$/),
  );

  return { beforeComma, afterComma };
};

export const addComma = (price: number): string => {
  return price.toFixed(2).toString().replace('.', ',');
};

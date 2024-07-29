const formatPrice = (value, currency) => {
  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency,
  }).format(value);
};

export default formatPrice;

const formatPrice = (value, currency) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(value);
};

export default formatPrice;

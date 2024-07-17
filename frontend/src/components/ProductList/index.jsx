import Product from '../Product';

const ProductList = () => {
  return (
    <div className='flex justify-around items-center gap-8 flex-wrap'>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default ProductList;

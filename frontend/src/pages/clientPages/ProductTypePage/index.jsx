import { Pagination } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ProductList } from '../../../components';

const ProductTypePage = () => {
  const { type } = useParams();

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <img
        src={`/images/banner_${type}.png`}
        alt={`${type}_banner`}
        className='mb-12'
      />
      <ProductList category={type} />
      <Pagination
        count={10}
        className='py-4'
      />
    </div>
  );
};

export default ProductTypePage;

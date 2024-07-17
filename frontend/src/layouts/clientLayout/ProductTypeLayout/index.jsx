import PropTypes from 'prop-types';
import { Footer, Header } from '../../../components';

const ProductTypeLayout = ({ children }) => {
  return (
    <div className='bg-gray-100'>
      <Header />
      <div className='flex justify-between items-start gap-2 pt-6 px-16 py-4'>
        {children}
      </div>
      <Footer />
    </div>
  );
};

ProductTypeLayout.propTypes = {
  children: PropTypes.any,
};

export default ProductTypeLayout;

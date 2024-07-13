import PropTypes from 'prop-types';
import { Header, SideBar } from '../../../components';

const ProductTypeLayout = ({ children }) => {
  return (
    <div className='bg-gray-100'>
      <Header />
      <div className='flex justify-between items-start gap-2 p-4'>
        <SideBar />
        {children}
      </div>
    </div>
  );
};

ProductTypeLayout.propTypes = {
  children: PropTypes.any,
};

export default ProductTypeLayout;

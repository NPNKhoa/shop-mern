import PropTypes from 'prop-types';
import { Footer, Header } from '../../../components';

const ProductLayout = ({ children }) => {
  return (
    <div className='bg-slate-100'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

ProductLayout.propTypes = {
  children: PropTypes.any,
};

export default ProductLayout;

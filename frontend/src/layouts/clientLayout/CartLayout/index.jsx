import { Footer, Header } from '../../../components';
import PropTypes from 'prop-types';

const CartLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

CartLayout.propTypes = {
  children: PropTypes.any,
};

export default CartLayout;

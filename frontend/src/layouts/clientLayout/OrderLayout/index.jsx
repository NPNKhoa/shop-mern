import PropTypes from 'prop-types';
import { Footer, Header } from '../../../components';

const OrderLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

OrderLayout.propTypes = {
  children: PropTypes.any,
};

export default OrderLayout;

import PropTypes from 'prop-types';

const OrderLayout = ({ children }) => {
  return (
    <div>
      <h1>Order Layout</h1>
      {children}
    </div>
  );
};

OrderLayout.propTypes = {
  children: PropTypes.any,
};

export default OrderLayout;

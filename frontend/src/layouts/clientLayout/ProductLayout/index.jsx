import PropTypes from 'prop-types';

const ProductLayout = ({ children }) => {
  return (
    <div>
      <h1>Product Layout</h1>
      {children}
    </div>
  );
};

ProductLayout.propTypes = {
  children: PropTypes.any,
};

export default ProductLayout;

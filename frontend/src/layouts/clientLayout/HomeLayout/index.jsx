import PropTypes from 'prop-types';
import Header from '../../../components/Header';

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

HomeLayout.propTypes = {
  children: PropTypes.any,
};

export default HomeLayout;

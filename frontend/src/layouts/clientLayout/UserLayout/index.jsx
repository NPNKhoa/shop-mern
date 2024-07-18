import PropTypes from 'prop-types';
import { Footer, Header } from '../../../components';

const UserLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

UserLayout.propTypes = {
  children: PropTypes.any,
};

export default UserLayout;

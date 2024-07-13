import PropTypes from 'prop-types';
import { Header } from '../../../components';

const HomeLayout = ({ children }) => {
  return (
    <div className='bg-slate-100'>
      <Header />
      {children}
    </div>
  );
};

HomeLayout.propTypes = {
  children: PropTypes.any,
};

export default HomeLayout;

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AdminAuthLayout = ({ children }) => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <h1 className='text-blue-600 logo text-6xl block w-fit mx-auto'>
        <Link to={'/'}>SHOPMERN</Link>
      </h1>
      {children}
    </div>
  );
};

AdminAuthLayout.propTypes = {
  children: PropTypes.any,
};

export default AdminAuthLayout;

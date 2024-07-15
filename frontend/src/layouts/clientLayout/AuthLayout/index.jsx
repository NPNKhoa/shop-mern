import PropTypes from 'prop-types';

const AuthLayout = ({ children }) => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      {children}
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.any,
};

export default AuthLayout;

import PropTypes from 'prop-types';
import { AdminHeader, AdminSideBar } from '../../../components';

const AdminHomeLayout = ({ children }) => {
  const type = window.location.pathname.split('/').pop();

  return (
    <>
      <AdminHeader type={type} />
      <div className='w-screen h-screen flex justify-between items-center gap-4 overflow-auto'>
        <AdminSideBar className='w-1/5 h-full' />
        <div className='w-4/5 mt-10 pr-4'>{children}</div>
      </div>
    </>
  );
};

AdminHomeLayout.propTypes = {
  children: PropTypes.any,
};

export default AdminHomeLayout;

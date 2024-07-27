import { useTranslation } from 'react-i18next';
import { Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LogoutIcon from '@mui/icons-material/Logout';

const AdminSideBar = (props) => {
  const { t } = useTranslation();
  const currentPage = window.location.pathname.split('/').pop();

  return (
    <div {...props}>
      <div className='w-full h-full flex flex-col justify-around items-center py-6 bg-sky-200'>
        <div className='w-full'>
          <h1 className='text-blue-600 logo text-4xl block w-fit mx-auto'>
            <Link to={'/'}>SHOPMERN</Link>
          </h1>
          <Divider className='w-full pt-6' />
        </div>

        <div className='w-full h-3/4 flex flex-col justify-start items-start gap-6 px-4 py-2'>
          <Link
            to={'/admin/products'}
            className={`w-full p-4 hover:bg-sky-300 hover:rounded-md flex justify-start items-center gap-4 ${
              currentPage === 'products' && ' bg-sky-400 rounded-md'
            }`}>
            <InventoryIcon fontSize='large' />
            {t('text.product')}
          </Link>

          <Link
            to={'/admin/users'}
            className={`w-full p-4 hover:bg-sky-300 flex justify-start items-center gap-4 ${
              currentPage === 'users' && ' bg-sky-400 rounded-md'
            }`}>
            <PeopleIcon fontSize='large' />
            {t('text.user')}
          </Link>

          <Link
            to={'/admin/orders'}
            className={`w-full p-4 hover:bg-sky-300 flex justify-start items-center gap-4 ${
              currentPage === 'orders' && ' bg-sky-400 rounded-md'
            }`}>
            <LocalMallIcon fontSize='large' />
            {t('text.order')}
          </Link>
        </div>

        <Divider className='w-full pb-4' />
        <div className='w-full px-4 py-6'>
          <Button className='mx-auto w-full mt-4'>
            {t('button.logout')}
            <LogoutIcon className='ps-2' />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;

import { useTranslation } from 'react-i18next';
import { OrderHistoryList, UserInfor } from './components';

const UserPage = () => {
  const { t } = useTranslation();

  return (
    <div className='px-7 py-16 bg-gray-100'>
      <h2 className='text-center text-sky-400 text-3xl font-semibold mb-16'>
        {t('text.hello')}{' '}
        <span className='font-bold text-4xl text-sky-500'>Nguyên Khoa</span>
      </h2>
      <div className='w-full flex justify-between items-start'>
        <div className='w-1/2'>
          <h3 className='text-left uppercase text-sky-500 font-medium text-2xl'>
            {t('text.order-history')}
          </h3>
          <OrderHistoryList />
        </div>
        <div className='w-1/3'>
          <UserInfor />
        </div>
      </div>
    </div>
  );
};

export default UserPage;

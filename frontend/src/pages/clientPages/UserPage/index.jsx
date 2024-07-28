import { useTranslation } from 'react-i18next';
import { OrderHistoryList, UserInfor } from './components';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserById } from '../../../redux/thunks/userThunk';

const UserPage = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const currentUser = JSON.parse(localStorage.getItem('loggedInUser'));

  useEffect(() => {
    console.log(currentUser);
    dispatch(getUserById(currentUser?.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  return (
    <div className='px-7 py-16 bg-gray-100'>
      <h2 className='text-center text-sky-400 text-3xl font-semibold mb-16'>
        {t('text.hello')}{' '}
        <span className='font-bold text-4xl text-sky-500'>
          {currentUser?.name}
        </span>
      </h2>
      <div className='w-full flex justify-between items-start'>
        <div className='w-1/2'>
          <h3 className='text-left uppercase text-sky-500 font-medium text-2xl'>
            {t('text.order-history')}
          </h3>
          <OrderHistoryList />
        </div>
        <div className='w-1/3'>
          <UserInfor user={currentUser} />
        </div>
      </div>
    </div>
  );
};

export default UserPage;

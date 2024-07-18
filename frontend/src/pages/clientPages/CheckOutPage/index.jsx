import { Button } from '@mui/material';
import OrderInforInput from './components/OrderInforInput';
import OrderOverview from './components/OrderOverview';
import { useTranslation } from 'react-i18next';

const CheckOutPage = () => {
  const { t } = useTranslation();

  return (
    <div className='bg-gray-100 px-7 py-16 w-full'>
      <div className='flex items-start justify-between'>
        <OrderOverview className='w-1/3' />
        <OrderInforInput className='w-1/2' />
      </div>
      <Button
        variant='contained'
        className='w-1/2 translate-x-1/2'
        sx={{ marginTop: '3rem' }}>
        {t('button.order')}
      </Button>
    </div>
  );
};

export default CheckOutPage;

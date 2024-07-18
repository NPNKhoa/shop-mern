import { useTranslation } from 'react-i18next';
import OrderHistory from '../OrderHistory';
import { Button } from '@mui/material';

const OrderHistoryList = () => {
  const { t } = useTranslation();

  return (
    <div>
      <OrderHistory />
      <OrderHistory />
      <OrderHistory />
      <Button
        variant='outlined'
        className='w-full'>
        {t('button.see-more')}
      </Button>
    </div>
  );
};

export default OrderHistoryList;

import { Button, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { OrderDetailBody, OrderDetailHeader } from './components';

const OrderPage = () => {
  const { t } = useTranslation();
  const { orderId } = useParams();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className='bg-gray-100 px-7 py-16 flex flex-col justify-center items-center'>
      <h2 className='uppercase text-4xl text-center text-sky-500 font-semibold'>
        {t('text.order-detail')}
      </h2>

      <Paper
        elevation={5}
        sx={{ padding: '2rem 4rem', width: '65%', margin: '2rem auto' }}>
        <OrderDetailHeader orderId={orderId} />
        <OrderDetailBody />
      </Paper>

      <Button
        variant='outlined'
        onClick={handleBackClick}>
        {t('button.back')}
      </Button>
    </div>
  );
};

export default OrderPage;

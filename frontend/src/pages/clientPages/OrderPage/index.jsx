import { Button, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { OrderDetailBody, OrderDetailHeader } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOrderById } from '../../../redux/thunks/orderThunk';

const OrderPage = () => {
  const { t } = useTranslation();
  const { orderId } = useParams();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const dispatch = useDispatch();

  const order = useSelector((state) => state.orders.order);

  useEffect(() => {
    dispatch(getOrderById(orderId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='bg-gray-100 px-7 py-16 flex flex-col justify-center items-center'>
      <h2 className='uppercase text-4xl text-center text-sky-500 font-semibold'>
        {t('text.order-detail')}
      </h2>

      <Paper
        elevation={5}
        sx={{ padding: '2rem 4rem', width: '65%', margin: '2rem auto' }}>
        <OrderDetailHeader order={order} />
        <OrderDetailBody order={order} />
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

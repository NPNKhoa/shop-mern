import { useTranslation } from 'react-i18next';
import OrderHistory from '../OrderHistory';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getOrders } from '../../../../../redux/thunks/orderThunk';

const OrderHistoryList = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orders.orderList);

  const [visibleOrders, setVisibleOrders] = useState(3);

  useEffect(() => {
    dispatch(getOrders());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSeeMore = () => {
    setVisibleOrders((prevVisibleOrders) => prevVisibleOrders + 3);
  };

  console.log(orderList);

  return (
    <div>
      {orderList.slice(0, visibleOrders).map((order) => (
        <OrderHistory
          key={order._id}
          order={order}
        />
      ))}
      <Button
        variant='outlined'
        className='w-full'
        disabled={visibleOrders >= orderList?.length}
        onClick={() => handleSeeMore()}>
        {t('button.see-more')}
      </Button>
    </div>
  );
};

export default OrderHistoryList;

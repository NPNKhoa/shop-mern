import { useTranslation } from 'react-i18next';
import { DataTable } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getOrdersByAdmin } from '../../../redux/thunks/orderThunk';
import ViewOrderModal from './components/ViewOrderModal';
import formatPrice from '../../../helpers/formatPrice';

const AdminOrderPage = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orders.orderList);

  const [open, setOpen] = useState(false);
  const [orderId, setOrderId] = useState('');

  const columns = [
    { id: '_id', type: 'text', label: t('text.order-code') },
    { id: 'totalPrice', type: 'text', label: t('text.total-price') },
    { id: 'isPaid', type: 'boolean', label: t('text.payment-status') },
    { id: 'isDelivered', type: 'boolean', label: t('text.delivery-status') },
  ];

  const standarlizeData = (data) => {
    const standarlizedData = data.map((item) => ({
      ...item,
      totalPrice: formatPrice(item.totalPrice, 'VND'),
    }));
    return standarlizedData;
  };

  useEffect(() => {
    dispatch(getOrdersByAdmin());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleViewOrder = (order) => {
    setOrderId(order._id);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setOrderId('');
  };

  const standardlizedData = standarlizeData(orderList);

  return (
    <div>
      <DataTable
        title={t('text.order')}
        columns={columns}
        data={standardlizedData}
        sortable={true}
        filterable={true}
        actions={{ delete: false, view: true }}
        pagination={{ rowsPerPageOptions: [4, 8, 12], defaultRowsPerPage: 4 }}
        showIndex={true}
        onView={handleViewOrder}
      />
      {orderId && (
        <ViewOrderModal
          open={open}
          onClose={handleCloseModal}
          orderId={orderId}
        />
      )}
    </div>
  );
};

export default AdminOrderPage;

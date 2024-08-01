import { Button, Divider, Modal, Paper, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getOrderById,
  updateOrderStatus,
} from '../../../../../redux/thunks/orderThunk.js';
import formatPrice from '../../../../../helpers/formatPrice.js';
import PurchasedProductTable from '../PurchasedProductTable/index.jsx';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { ConfirmationDialog } from '../../../../../components/index.js';

const ViewOrderModal = ({ open, onClose, orderId }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const order = useSelector((state) => state.orders.order);

  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [updatingField, setUpdatingField] = useState('');

  useEffect(() => {
    dispatch(getOrderById(orderId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatShippingAddress = (shippingAddress) =>
    `${shippingAddress?.fullname}, ${shippingAddress?.phone}, ${shippingAddress?.address}`;

  const handleClickUpdate = (fieldToUpdate) => {
    const currentTime = new Date().toLocaleString();
    openDialog(fieldToUpdate, currentTime);
  };

  const openDialog = (field, currentTime) => {
    setIsOpenDialog(true);
    const title = t(`text.update-${field}-status-title`);
    const content =
      t(`text.update-${field}-status-content`) + ' ' + currentTime;
    setTitle(title);
    setContent(content);
  };

  const closeDialog = () => {
    setIsOpenDialog(false);
  };

  const handleConfirmUpdate = () => {
    dispatch(
      updateOrderStatus({
        orderId,
        isPaid: updatingField === 'payment' ? true : order.isPaid,
        isDelivered: updatingField === 'delivery' ? true : order.isDelivered,
      })
    )
      .unwrap()
      .then(() => {
        closeDialog();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => onClose()}>
        <Paper
          elevation={3}
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4/5 p-8 overflow-scroll'>
          <h2 className='uppercase text-center font-semibold text-sky-600 text-2xl pb-2'>
            {t('text.order-detail')}
          </h2>
          <Divider className='w-full bg-gray-800 h-1 rounded-lg' />
          <div className='flex justify-between items-center pt-6'>
            <Stack spacing={2}>
              <div className='flex justify-start items-center gap-4'>
                {t('text.order-code')}:
                <span className='text-xl font-semibold'>{order?._id}</span>
              </div>

              <div className='flex justify-start items-center gap-4'>
                {t('text.buyer')}:
                <span className='text-xl font-semibold'>
                  {order?.user?.name}
                </span>
              </div>

              <div className='flex flex-col justify-start items-start gap-4'>
                {t('text.purchased-product')}:
                <span className='text-xl font-semibold'>
                  <PurchasedProductTable orderItems={order?.orderItems} />
                </span>
              </div>

              <div className='flex justify-start items-center gap-4'>
                {t('text.shipping-infor')}:
                <span className='text-xl font-semibold'>
                  {formatShippingAddress(order?.shippingAddress)}
                </span>
              </div>

              <div className='flex justify-start items-center gap-4'>
                {t('text.total-price')}:
                <span className='text-xl font-semibold'>
                  {formatPrice(order?.totalPrice, 'VND')}
                </span>
              </div>

              <div className='flex justify-start items-center gap-6'>
                {t('text.payment-status')}:
                <span className='text-xl font-semibold'>
                  {order?.isPaid ? (
                    <CheckCircleIcon color='success' />
                  ) : (
                    <CancelIcon color='error' />
                  )}
                  <Button
                    variant='text'
                    disabled={order.isPaid}
                    onClick={() => {
                      setUpdatingField('payment');
                      handleClickUpdate('payment');
                    }}>
                    {t('button.update')}
                  </Button>
                </span>
              </div>

              <div className='flex justify-start items-center gap-6'>
                {t('text.delivery-status')}:
                <span className='text-xl font-semibold'>
                  {order?.isDelivered ? (
                    <CheckCircleIcon color='success' />
                  ) : (
                    <CancelIcon color='error' />
                  )}
                  <Button
                    variant='text'
                    disabled={order.isDelivered}
                    onClick={() => {
                      setUpdatingField('delivery');
                      handleClickUpdate('delivery');
                    }}>
                    {t('button.update')}
                  </Button>
                </span>
              </div>
            </Stack>
          </div>
        </Paper>
      </Modal>
      {title && content ? (
        <ConfirmationDialog
          title={title}
          content={content}
          open={isOpenDialog}
          onConfirm={handleConfirmUpdate}
          onClose={closeDialog}
        />
      ) : null}
    </div>
  );
};

ViewOrderModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  orderId: PropTypes.string.isRequired,
};

export default ViewOrderModal;

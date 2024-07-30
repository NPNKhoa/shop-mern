import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import formatDate from '../../../../../helpers/formatDate';

const OrderDetailHeader = ({ order }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className='flex justify-between items-center mb-4'>
        <div className='text-sm text-gray-600 w-1/2'>
          {t('text.order-code')}{' '}
          <span className='font-semibold text-lg'>#{order?._id}</span>
        </div>

        <div className='text-sm text-gray-600'>
          {t('text.order-date')}{' '}
          <span className='font-semibold text-lg'>
            {order?.createdAt && formatDate(order?.createdAt)}
          </span>
        </div>
      </div>

      <div className='flex justify-between items-center mb-4'>
        <div className='text-sm text-gray-600 w-1/2'>
          {t('text.address')}{' '}
          <span className='font-semibold text-lg'>
            {order?.shippingAddress?.address}
          </span>
        </div>

        <div className='text-sm text-gray-600'>
          {t('text.payment-method')}{' '}
          <span className='font-semibold text-lg'>
            {order?.paymentMethod === 'cod' && 'COD'}
          </span>
        </div>
      </div>
    </>
  );
};

OrderDetailHeader.propTypes = {
  order: PropTypes.object,
};

export default OrderDetailHeader;

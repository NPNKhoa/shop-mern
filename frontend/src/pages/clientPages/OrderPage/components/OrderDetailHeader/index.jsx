import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const OrderDetailHeader = ({ orderId }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className='flex justify-between items-center mb-4'>
        <div className='text-sm text-gray-600 w-1/2'>
          {t('text.order-code')}{' '}
          <span className='font-semibold text-lg'>#{orderId}</span>
        </div>

        <div className='text-sm text-gray-600'>
          {t('text.order-date')}{' '}
          <span className='font-semibold text-lg'>10:00:00, 18/07/2024</span>
        </div>
      </div>

      <div className='flex justify-between items-center mb-4'>
        <div className='text-sm text-gray-600 w-1/2'>
          {t('text.address')}{' '}
          <span className='font-semibold text-lg'>
            Xuân Khánh, Ninh Kiều, Cần Thơ, Xuân Khánh, Ninh Kiều, Cần Thơ
          </span>
        </div>

        <div className='text-sm text-gray-600'>
          {t('text.delivery-method')}{' '}
          <span className='font-semibold text-lg'>COD</span>
        </div>
      </div>
    </>
  );
};

OrderDetailHeader.propTypes = {
  orderId: PropTypes.string,
};

export default OrderDetailHeader;

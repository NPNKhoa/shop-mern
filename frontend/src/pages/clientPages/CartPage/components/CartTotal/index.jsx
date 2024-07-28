import { Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import formatPrice from '../../../../../helpers/formatPrice';
import PropTypes from 'prop-types';

const CartTotal = ({ total, ...props }) => {
  const { t } = useTranslation();

  console.log(typeof total);
  return (
    <div {...props}>
      <h3 className='text-2xl uppercase font-medium text-sky-500 mb-6'>
        {t('text.cart-total')}
      </h3>
      <div className='flex flex-col gap-4 justify-evenly'>
        <div className='flex items-center justify-between'>
          <span>{t('text.subtotal')}</span>
          <span>{formatPrice(total, 'VND')}</span>
        </div>
        <Divider sx={{ borderBottomWidth: 2 }} />
        <div className='flex items-center justify-between'>
          <span>{t('text.shipping-fee')}</span>
          <span>Free</span>
        </div>
        <Divider sx={{ borderBottomWidth: 2 }} />
        <div className='flex items-center justify-between font-semibold text-xl'>
          <span>{t('text.total')}</span>
          <span>{formatPrice(total, 'VND')}</span>
        </div>
      </div>
    </div>
  );
};

CartTotal.propTypes = {
  total: PropTypes.number.isRequired,
};

export default CartTotal;

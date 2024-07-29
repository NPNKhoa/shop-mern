import { Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import formatPrice from '../../../../../helpers/formatPrice';
import { useEffect } from 'react';

const OrderOverview = ({ ...props }) => {
  const { t } = useTranslation();

  const cart = useSelector((state) => state.cart.cart);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div {...props}>
      <h3 className='text-2xl uppercase font-medium text-sky-500 mb-6'>
        {t('text.order-overview')}
      </h3>
      <div className='flex flex-col gap-4 justify-evenly'>
        <div className='flex items-center justify-between'>
          <span>{t('text.items-total')}</span>
          <span>{cart.totalItems}</span>
        </div>
        <Divider sx={{ borderBottomWidth: 2 }} />
        <div className='flex items-center justify-between'>
          <span>{t('text.subtotal')}</span>
          <span>{formatPrice(cart?.totalCartPrice, 'VND')}</span>
        </div>
        <Divider sx={{ borderBottomWidth: 2 }} />
        <div className='flex items-center justify-between'>
          <span>{t('text.shipping-fee')}</span>
          <span>Free</span>
        </div>
        <Divider sx={{ borderBottomWidth: 2 }} />
        <div className='flex items-center justify-between font-semibold text-xl'>
          <span>{t('text.total')}</span>
          <span>{formatPrice(cart?.totalCartPrice, 'VND')}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderOverview;

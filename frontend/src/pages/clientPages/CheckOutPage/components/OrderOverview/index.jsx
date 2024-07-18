import { Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';

const OrderOverview = ({ ...props }) => {
  const { t } = useTranslation();
  return (
    <div {...props}>
      <h3 className='text-2xl uppercase font-medium text-sky-500 mb-6'>
        {t('text.order-overview')}
      </h3>
      <div className='flex flex-col gap-4 justify-evenly'>
        <div className='flex items-center justify-between'>
          <span>{t('text.items-total')}</span>
          <span>4</span>
        </div>
        <Divider sx={{ borderBottomWidth: 2 }} />
        <div className='flex items-center justify-between'>
          <span>{t('text.subtotal')}</span>
          <span>$82</span>
        </div>
        <Divider sx={{ borderBottomWidth: 2 }} />
        <div className='flex items-center justify-between'>
          <span>{t('text.shipping-fee')}</span>
          <span>Free</span>
        </div>
        <Divider sx={{ borderBottomWidth: 2 }} />
        <div className='flex items-center justify-between font-semibold text-xl'>
          <span>{t('text.total')}</span>
          <span>$82</span>
        </div>
      </div>
    </div>
  );
};

export default OrderOverview;

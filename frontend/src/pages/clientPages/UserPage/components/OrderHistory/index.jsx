import { Paper, Tooltip } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import formatPrice from '../../../../../helpers/formatPrice';
import formatDate from '../../../../../helpers/formatDate';

const OrderHistory = ({ order }) => {
  const { t } = useTranslation();

  return (
    <Link to={`/order/${order._id}`}>
      <Tooltip title={t('text.see-detail')}>
        <Paper
          elevation={5}
          sx={{ margin: '2rem 0', padding: '1rem 2.5rem' }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, md: 2 }}>
            <Grid xs={5}>{t('text.order-code')}</Grid>
            <Grid xs={7}>
              <span className='font-semibold text-lg'>{order?._id}</span>
            </Grid>

            <Grid xs={5}>{t('text.total-price')}</Grid>
            <Grid xs={7}>
              <span className='font-semibold text-lg'>
                {formatPrice(order?.totalPrice, 'VND')}
              </span>
            </Grid>

            <Grid xs={5}>{t('text.order-date')}</Grid>
            <Grid xs={7}>
              <span className='font-semibold text-lg'>
                {formatDate(order?.createdAt)}
              </span>
            </Grid>
          </Grid>
        </Paper>
      </Tooltip>
    </Link>
  );
};

OrderHistory.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrderHistory;

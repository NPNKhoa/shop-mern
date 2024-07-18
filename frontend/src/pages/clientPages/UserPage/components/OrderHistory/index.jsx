import { Paper, Tooltip } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const OrderHistory = () => {
  const { t } = useTranslation();
  const orderId = '01916116165815484';

  return (
    <Link to={`/order/${orderId}`}>
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
              <span className='font-semibold text-lg'>#{orderId}</span>
            </Grid>

            <Grid xs={5}>{t('text.total-price')}</Grid>
            <Grid xs={7}>
              <span className='font-semibold text-lg'>2.000.000VND</span>
            </Grid>

            <Grid xs={5}>{t('text.order-date')}</Grid>
            <Grid xs={7}>
              <span className='font-semibold text-lg'>
                10:00:00, 18/07/2024
              </span>
            </Grid>
          </Grid>
        </Paper>
      </Tooltip>
    </Link>
  );
};

export default OrderHistory;

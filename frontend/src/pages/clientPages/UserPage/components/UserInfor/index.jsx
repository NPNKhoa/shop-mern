import { Paper, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const UserInfor = ({ user }) => {
  const { t } = useTranslation();

  return (
    <Paper
      elevation={4}
      sx={{ padding: '2rem' }}>
      <Stack spacing={4}>
        <h3 className='text-center uppercase text-sky-500 font-medium text-2xl'>
          {t('text.user-infor')}
        </h3>

        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 1, md: 2 }}>
          <Grid xs={5}>{t('text.fullname')}</Grid>
          <Grid xs={7}>
            <span className='font-semibold text-lg'>{user?.name}</span>
          </Grid>

          <Grid xs={5}>{t('text.email')}</Grid>
          <Grid xs={7}>
            <span className='font-semibold text-lg'>{user?.email}</span>
          </Grid>

          <Grid xs={5}>{t('text.phone')}</Grid>
          <Grid xs={7}>
            <span className='font-semibold text-lg'>{user?.phone}</span>
          </Grid>

          <Grid xs={5}>{t('text.purchased')}</Grid>
          <Grid xs={7}>
            <span className='font-semibold text-lg'>100</span>
          </Grid>
        </Grid>
      </Stack>
    </Paper>
  );
};

UserInfor.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserInfor;

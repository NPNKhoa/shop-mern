import { Button, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

const PromotionInput = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h4 className='text-sky-500 text-lg font-semibold mb-2'>
        {t('text.enter-promotion-title')}
      </h4>
      <TextField
        placeholder={t('text.promotion-code')}
        size='small'
      />
      <Button
        variant='contained'
        sx={{ marginLeft: '0.5rem' }}>
        {t('text.confirm')}
      </Button>
    </div>
  );
};

export default PromotionInput;

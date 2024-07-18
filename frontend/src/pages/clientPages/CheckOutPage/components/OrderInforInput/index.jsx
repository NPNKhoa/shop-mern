import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const OrderInforInput = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <div {...props}>
      <h3 className='text-2xl uppercase font-medium text-sky-500 mb-6'>
        {t('text.receiving-infor')}
      </h3>
      <div className='flex flex-col items-center justify-around gap-6 w-full'>
        <TextField
          required
          variant='outlined'
          label={t('text.fullname')}
          placeholder={t('text.fullname')}
          size='small'
          className='w-full'
        />
        <TextField
          required
          variant='outlined'
          label={t('text.phone')}
          placeholder={t('text.phone')}
          size='small'
          className='w-full'
        />
        <TextField
          required
          variant='outlined'
          label={t('text.address')}
          placeholder={t('text.address')}
          size='small'
          className='w-full'
        />
        <FormControl
          required
          fullWidth>
          <InputLabel id='payment-method-label'>
            {t('text.payment-method')}
          </InputLabel>
          <Select
            labelId='payment-method-label'
            id='payment-method'
            label={t('text.payment-method')}>
            <MenuItem value={10}>COD</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default OrderInforInput;

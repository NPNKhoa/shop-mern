import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../../../../redux/thunks/orderThunk';
import { useNavigate } from 'react-router-dom';

const OrderInforInput = ({ ...props }) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  const [paymentMethod, setPaymentMethod] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleClickOrderButton = () => {
    dispatch(
      createOrder({
        items: cart.cartItems,
        fullname: name,
        address,
        phone,
        paymentMethod,
      })
    )
      .unwrap()
      .then(() => {
        alert('Đặt hàng thành công');
        navigate('/');
      })
      .catch((error) => alert(error));
  };

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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          variant='outlined'
          label={t('text.phone')}
          placeholder={t('text.phone')}
          size='small'
          className='w-full'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          required
          variant='outlined'
          label={t('text.address')}
          placeholder={t('text.address')}
          size='small'
          className='w-full'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <FormControl
          required
          fullWidth>
          <InputLabel
            id='payment-method-label'
            size='small'>
            {t('text.payment-method')}
          </InputLabel>
          <Select
            labelId='payment-method-label'
            id='payment-method'
            size='small'
            label={t('text.payment-method')}
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}>
            <MenuItem value={'cod'}>COD</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant='contained'
          className='w-1/2'
          sx={{ marginTop: '3rem' }}
          onClick={() => handleClickOrderButton()}>
          {t('button.order')}
        </Button>
      </div>
    </div>
  );
};

export default OrderInforInput;

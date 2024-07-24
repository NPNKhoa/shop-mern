import { Button, Divider, TextField } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUp } from '../../../redux/thunks/authThunk';

const SignUpPage = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleClickSignUp = () => {
    dispatch(signUp({ name, email, password, confirmPassword, phone }));
  };

  return (
    <div className='w-2/3 flex justify-around items-center p-6 bg-blue-50 rounded-lg'>
      <div className='w-1/2 flex flex-col gap-5 justify-center items-center'>
        <div className='w-full'>
          <h3 className='uppercase text-2xl font-medium'>{t('text.hello')}</h3>
          <p>{t('text.login-subtitle')}</p>
        </div>

        <TextField
          required
          className='w-full'
          label={t('text.fullname')}
          size='small'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          className='w-full'
          label={t('text.phone')}
          size='small'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          required
          className='w-full'
          label={t('text.email')}
          size='small'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          type='password'
          id='password'
          className='w-full'
          label={t('text.password')}
          size='small'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          required
          type='password'
          id='confirmPassword'
          className='w-full'
          label={t('text.confirm-password')}
          size='small'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button
          variant='contained'
          className='w-full'
          onClick={() => handleClickSignUp()}>
          {t('button.register')}
        </Button>

        <div>
          {t('text.have-account') + ' '}
          <Link
            to={'/login'}
            className='text-blue-600'>
            {t('link.login')}
          </Link>
        </div>
      </div>
      <Divider
        orientation='vertical'
        variant='middle'
        flexItem
      />
      <div className='w-1/3 flex flex-col justify-center items-center gap-3'>
        <h1 className='text-blue-600 logo text-2xl'>
          <Link to={'/'}>SHOPMERN</Link>
        </h1>
        <img
          src='/images/logo-login.png'
          alt='logo-login'
        />
      </div>
    </div>
  );
};

export default SignUpPage;

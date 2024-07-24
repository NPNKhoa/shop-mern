import { Button, CircularProgress, Divider, TextField } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../../redux/thunks/authThunk';

const LoginPage = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    await dispatch(login({ email, password }));
    if (error) {
      alert(error);
    }
    window.location.reload();
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
          id='email'
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

        <Button
          variant='contained'
          className='w-full'
          onClick={() => handleLogin()}>
          {loading ? (
            <CircularProgress
              size={'1.6rem'}
              color='info'
            />
          ) : (
            t('button.login')
          )}
        </Button>

        <div className='w-full flex justify-between items-center'>
          <Link className='text-blue-600'>{t('link.forgot-password')}</Link>
          <div>
            {t('text.no-account') + ' '}
            <Link
              to={'/signup'}
              className='text-blue-600'>
              {t('link.create-account')}
            </Link>
          </div>
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

export default LoginPage;

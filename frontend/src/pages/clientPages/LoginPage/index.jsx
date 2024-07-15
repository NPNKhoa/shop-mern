import { Button, Divider, TextField } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const { t } = useTranslation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='w-2/3 flex justify-around items-center p-6 bg-blue-50 rounded-lg'>
      <div className='w-1/2 flex flex-col gap-5 justify-center items-center'>
        <div className='w-full'>
          <h3 className='uppercase text-2xl font-medium'>{t('text.hello')}</h3>
          <p>{t('text.login-subtitle')}</p>
        </div>

        <TextField
          required
          id='username'
          className='w-full'
          label={t('text.username')}
          size='small'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          className='w-full'>
          {t('button.login')}
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
      <div className='w-1/3'>
        <img
          src='/images/logo-login.png'
          alt='logo-login'
        />
      </div>
    </div>
  );
};

export default LoginPage;

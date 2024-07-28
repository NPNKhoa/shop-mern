import { Button, CircularProgress, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/thunks/authThunk';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const authUser = useSelector((state) => state.auth.authUser);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(login({ email, password }));

    // if (error) {
    //   return alert(error);
    // }

    // navigate('/admin/products');
  };

  useEffect(() => {
    if (authUser) {
      if (authUser.isAdmin) {
        navigate('/admin/products');
      } else {
        alert(t('text.not-admin'));
        navigate('/');
      }
    }

    if (error) {
      alert(error);
    }
  }, [authUser, error, navigate, t]);

  return (
    <div className='w-1/2 px-6 py-12 bg-sky-100 rounded-md mt-8 flex flex-col justify-start items-center gap-6'>
      <h1 className='uppercase text-sky-500 text-center text-2xl font-semibold pb-6'>
        {t('text.admin-login')}
      </h1>
      <TextField
        className='w-3/4'
        label={t('text.email')}
        placeholder={t('text.email')}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type='password'
        className='w-3/4'
        label={t('text.password')}
        placeholder={t('text.password')}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        variant='contained'
        className='w-1/2'
        onClick={() => handleLogin()}>
        {loading ? <CircularProgress color='inherit' /> : t('button.login')}
      </Button>
    </div>
  );
};

export default AdminLoginPage;

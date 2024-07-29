import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar, Badge, IconButton, Popover, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';
import stringToAvatar from '../../helpers/stringToAvatar';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const authUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const totalItems = useSelector((state) => state.cart.totalItems);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleClickLogin = () => {
    console.log('clicked login button');
  };

  const handleClickLogout = () => {
    localStorage.removeItem('loggedInUser');
    window.location.reload();
  };

  const handleClickCart = () => {
    navigate('/cart');
  };

  return (
    <div className='w-full flex justify-between items-center bg-white px-7 py-3 sticky top-0 z-50'>
      <h1 className='text-blue-600 logo text-4xl'>
        <Link to={'/'}>SHOPMERN</Link>
      </h1>
      <NavBar />
      <div className='w-fit flex justify-center items-center gap-5'>
        {authUser ? (
          <>
            <Avatar
              className='hover:cursor-pointer'
              {...stringToAvatar(`${authUser.name}`)}
              onClick={(e) => handleClick(e)}
            />
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}>
              <Stack>
                <Link to={'/me'}>
                  <Button sx={{ padding: '0.75rem 2rem' }}>
                    {t('text.my-infor')}
                  </Button>
                </Link>
                <Button
                  sx={{ padding: '0.75rem 2rem' }}
                  onClick={() => handleClickLogout()}>
                  {t('button.logout')}
                </Button>
              </Stack>
            </Popover>
          </>
        ) : (
          <Link
            to={'/login'}
            className='w-32'>
            <Button
              variant='contained'
              className='w-full'
              onClick={handleClickLogin}>
              {t('button.login')}
            </Button>
          </Link>
        )}
        <IconButton onClick={handleClickCart}>
          <Badge
            badgeContent={totalItems}
            color='error'>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </div>
      <LanguageSelector />
    </div>
  );
};

export default Header;

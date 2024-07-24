import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar, Badge, IconButton, Popover } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';
import { useState } from 'react';

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const authUser = JSON.parse(localStorage.getItem('loggedInUser'));

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

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

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
              {...stringAvatar(`${authUser.name}`)}
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
              <Button
                sx={{ padding: '0.5rem 1rem' }}
                onClick={() => handleClickLogout()}>
                {t('button.logout')}
              </Button>
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
            badgeContent={3}
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

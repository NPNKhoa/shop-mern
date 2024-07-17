import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClickLogin = () => {
    console.log('clicked login button');
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

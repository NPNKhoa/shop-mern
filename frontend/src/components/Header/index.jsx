import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  Badge,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import LanguageSelector from '../LanguageSelector';
import { Link } from 'react-router-dom';

const Header = () => {
  const { t } = useTranslation();

  const [search, setSearch] = useState('');

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClickLogin = () => {
    console.log('clicked login button');
  };

  const handleClickCart = () => {
    console.log('clicked cart button');
  };

  return (
    <div className='w-full flex justify-between items-center bg-blue-100 px-7 py-3'>
      <h1
        id='logo'
        className='text-blue-600'>
        <Link to={'/'}>SHOPMERN</Link>
      </h1>
      <FormControl sx={{ m: 1, width: '50%' }}>
        <OutlinedInput
          id='header-search-bar'
          placeholder={t('text.search')}
          value={search}
          onChange={(e) => handleChangeSearch(e)}
          startAdornment={
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <div className='w-fit flex justify-center items-center gap-3'>
        <Button
          variant='contained'
          onClick={handleClickLogin}>
          {t('button.login')}
        </Button>
        <IconButton onClick={handleClickCart}>
          <Badge
            badgeContent={3}
            color='primary'>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </div>
      <LanguageSelector />
    </div>
  );
};

export default Header;

import { Button } from '@mui/material';
import { Carousel, ProductList } from '../../../components';
import { ProductType } from './components';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <ProductType />
      <Carousel />
      <div className='flex flex-col justify-center items-center gap-6 my-2'>
        <ProductList />
        <Button
          variant='outlined'
          className='w-1/6'>
          {t('button.see-more')}
        </Button>
      </div>
    </div>
  );
};

export default HomePage;

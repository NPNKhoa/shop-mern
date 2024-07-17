import {
  HeroBanner,
  ExclusiveBanner,
  ProductList,
  Footer,
} from '../../../components';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <HeroBanner />
      <div className='py-16'>
        <h3 className='text-5xl mb-8 text-center uppercase font-medium'>
          {t('text.women-popular')}
          <hr className='w-1/6 m-auto mt-4 border-2 border-black rounded-full' />
        </h3>
        <ProductList />
      </div>
      <ExclusiveBanner />
      <div className='py-16'>
        <h3 className='text-5xl mb-8 text-center uppercase font-medium'>
          {t('text.new-collections')}
          <hr className='w-1/6 m-auto mt-4 border-2 border-black rounded-full' />
        </h3>
        <ProductList />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

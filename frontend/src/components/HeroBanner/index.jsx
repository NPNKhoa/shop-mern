import { useTranslation } from 'react-i18next';

const HeroBanner = () => {
  const { t } = useTranslation();

  return (
    <div className='flex items-center justify-center gap-8 bg-sky-100'>
      <h2
        className='uppercase w-2/5 leading-10'
        style={{ fontFamily: 'Playfair Display' }}>
        {t('banner.new-arrivals')} <br />
        <span className='text-7xl'>{t('banner.new-collections')}</span>
      </h2>
      <img
        src='/images/hero_image.png'
        alt='hero-image'
        className='w-1/3'
      />
    </div>
  );
};

export default HeroBanner;

import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ExclusiveBanner = () => {
  const { t } = useTranslation();

  return (
    <div className='flex items-center justify-center gap-8 bg-sky-100'>
      <h2
        className='w-1/3 leading-10'
        style={{ fontFamily: 'Playfair Display' }}>
        <div className='text-5xl'>{t('banner.exclusive')}</div>
        <div
          className='text-lg font-extra-light mt-4 mb-1'
          style={{ fontFamily: 'roboto' }}>
          {t('text.give-email')}
        </div>
        <TextField
          id='get-email-exclusive'
          placeholder={t('text.email')}
          size='small'
          InputProps={{ endAdornment: <ArrowForwardIcon /> }}
        />
      </h2>
      <img
        src='/images/exclusive_image.png'
        alt='exclusive-image'
        className='w-1/6'
      />
    </div>
  );
};

export default ExclusiveBanner;

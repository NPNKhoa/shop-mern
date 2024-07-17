import { useState } from 'react';
import { Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';

const SizeChooser = () => {
  const { t } = useTranslation();

  const [size, setSize] = useState('S');

  const handleChangeSize = (e) => {
    setSize(e.target.textContent);
  };
  return (
    <div className='my-4'>
      <label className='text-lg font-medium'>{t('text.select-size')}</label>
      <div className='flex gap-4 mt-2'>
        <Avatar
          className={`hover:cursor-pointer ${
            size === 'S' && 'border-2'
          } border-sky-500`}
          variant='square'
          onClick={(e) => handleChangeSize(e)}>
          S
        </Avatar>
        <Avatar
          className={`hover:cursor-pointer ${
            size === 'M' && 'border-2'
          } border-sky-500`}
          variant='square'
          onClick={(e) => handleChangeSize(e)}>
          M
        </Avatar>
        <Avatar
          className={`hover:cursor-pointer ${
            size === 'L' && 'border-2'
          } border-sky-500`}
          variant='square'
          onClick={(e) => handleChangeSize(e)}>
          L
        </Avatar>
        <Avatar
          className={`hover:cursor-pointer ${
            size === 'XL' && 'border-2'
          } border-sky-500`}
          variant='square'
          onClick={(e) => handleChangeSize(e)}>
          XL
        </Avatar>
        <Avatar
          className={`hover:cursor-pointer ${
            size === 'XXL' && 'border-2'
          } border-sky-500`}
          variant='square'
          onClick={(e) => handleChangeSize(e)}>
          XXL
        </Avatar>
      </div>
    </div>
  );
};

export default SizeChooser;

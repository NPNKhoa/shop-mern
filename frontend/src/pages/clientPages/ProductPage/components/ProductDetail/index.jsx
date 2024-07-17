import { Button, Rating } from '@mui/material';
import SizeChooser from '../SizeChooser';
import { NumberInput } from '../../../../../components';
import CategoryList from '../CategoryList';
import { useTranslation } from 'react-i18next';

const ProductDetail = () => {
  const { t } = useTranslation();

  return (
    <div className='flex justify-between items-start gap-10 p-7'>
      <img
        src='/images/product_13.png'
        alt='product_image'
        className='w-1/3'
      />

      <div className='w-2/3 flex flex-col justify-start items-start gap-2'>
        <h2 className='text-5xl font-semibold'>
          Men Green Solid Zhipperd Jacket
        </h2>
        <div className='flex justify-between items-center w-1/5'>
          <Rating
            name='read-only'
            value={4}
            readOnly
          />{' '}
          (122)
        </div>
        <div className='flex justify-between items-center w-1/6 my-6'>
          <span className='line-through text-slate-600'>$120</span>
          <span className='font-medium text-red-600 text-3xl'>$100</span>
        </div>
        <p className='md:h-28 sm:h-14'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam
          dicta accusantium quam quaerat voluptas harum mollitia, suscipit
          delectus, deserunt culpa consequatur, enim perferendis assumenda nisi
          tempore corporis cupiditate dolore.
        </p>
        <SizeChooser />
        <div className='flex justify-between items-center w-1/2 mb-2'>
          <NumberInput />
          <Button
            variant='contained'
            className='w-1/2'>
            {t('button.add-to-cart')}
          </Button>
        </div>
        <div className='flex justify-start items-center gap-2'>
          <span className='font-semibold'>{t('text.category')}:</span>
          <CategoryList />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

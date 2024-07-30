import { Button } from '@mui/material';
// import SizeChooser from '../SizeChooser';
import { NumberInput } from '../../../../../components';
import CategoryList from '../CategoryList';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import formatPrice from '../../../../../helpers/formatPrice.js';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../../redux/thunks/cartThunk.js';
import { useState } from 'react';

const ProductDetail = ({ product }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const categorySet = new Set();
  categorySet.add(product?.category);

  const categoryList = [...categorySet]; // Convert Set to Array

  const handleAddToCart = (productId, quantity) => {
    console.log(productId, quantity);
    if (!quantity || quantity === 0) {
      return alert('Quantity must be greater than 0');
    }
    dispatch(addToCart({ productId, quantity }));
  };

  const [quantity, setQuantity] = useState(0);

  return (
    <div className='flex justify-between items-start gap-10 p-7'>
      <img
        src={import.meta.env.VITE_IMG_URL + product?.image}
        alt='product_image'
        className='w-1/3'
      />

      <div className='w-2/3 flex flex-col justify-start items-start gap-2'>
        <h2 className='text-5xl font-semibold'>{product?.name}</h2>

        <div className='flex flex-col justify-between items-start gap-1 w-1/6 my-6'>
          <span className='line-through text-slate-600'>
            {formatPrice(product?.old_price, 'VND')}
          </span>{' '}
          <span className='font-medium text-red-600 text-3xl'>
            {formatPrice(product?.new_price, 'VND')}
          </span>
        </div>
        <p className='md:h-28 sm:h-14'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam
          dicta accusantium quam quaerat voluptas harum mollitia, suscipit
          delectus, deserunt culpa consequatur, enim perferendis assumenda nisi
          tempore corporis cupiditate dolore.
        </p>
        {/* <SizeChooser /> */}
        <div className='flex justify-between items-center w-1/2 mb-2'>
          <NumberInput
            value={quantity}
            onChange={setQuantity}
          />
          <Button
            variant='contained'
            className='w-1/2'
            onClick={() => handleAddToCart(product?._id, quantity)}>
            {t('button.add-to-cart')}
          </Button>
        </div>
        <div className='flex justify-start items-center gap-2'>
          <span className='font-semibold'>{t('text.category')}:</span>
          <CategoryList categoryList={categoryList} />
        </div>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDetail;

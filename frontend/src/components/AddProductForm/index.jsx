import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/thunks/productThunk';

const AddProductForm = ({ onCloseModal }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [promotionPrice, setPromotionPrice] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleChangeImage = (e) => {
    const file = e.target.files;
    if (!file) return;
    setImageFile(file[0]);
  };

  const handleAddProduct = () => {
    dispatch(
      addProduct({
        name: productName,
        category,
        new_price: promotionPrice,
        old_price: originalPrice,
        imageFile,
      })
    );
  };

  return (
    <>
      <h2 className='uppercase text-2xl text-sky-500 font-semibold'>
        {t(`text.add-products`)}
      </h2>

      <TextField
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        label={t('text.product-name')}
        placeholder={t('text.product-name')}
        className='w-full'
      />

      <TextField
        value={originalPrice}
        onChange={(e) => setOriginalPrice(e.target.value)}
        label={t('text.original-price')}
        placeholder={t('text.original-price')}
        className='w-full'
      />

      <TextField
        value={promotionPrice}
        onChange={(e) => setPromotionPrice(e.target.value)}
        label={t('text.saled-price')}
        placeholder={t('text.saled-price')}
        className='w-full'
      />

      <FormControl fullWidth>
        <InputLabel id='category-select'>{t('text.category')}</InputLabel>
        <Select
          labelId='category-select'
          value={category}
          label={t('text.category')}
          onChange={(e) => setCategory(e.target.value)}>
          <MenuItem value={'men'}>Men</MenuItem>
          <MenuItem value={'women'}>Women</MenuItem>
          <MenuItem value={'kids'}>Kids</MenuItem>
        </Select>
      </FormControl>

      <div>
        <label
          className='block mb-2 text-sm font-medium'
          htmlFor='file_input'>
          Upload file
        </label>
        <input
          id='file_input'
          className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50'
          aria-describedby='file_input_help'
          onChange={(e) => handleChangeImage(e)}
          type='file'></input>
        <p
          className='mt-1 text-sm text-gray-500'
          id='file_input_help'>
          PNG, JPG, JPEG or GIF (MAX. 500MB).
        </p>
      </div>

      <div className='flex justify-between items-center w-1/3'>
        <Button
          variant='contained'
          onClick={() => handleAddProduct()}>
          {t('button.save')}
        </Button>
        <Button
          variant='outlined'
          onClick={() => onCloseModal()}>
          {t('button.cancel')}
        </Button>
      </div>
    </>
  );
};

AddProductForm.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};

export default AddProductForm;

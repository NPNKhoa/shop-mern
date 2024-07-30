import { Button, Divider, Modal, Paper, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  deleteProduct,
  getProductById,
} from '../../../../../redux/thunks/productThunk';
import formatPrice from '../../../../../helpers/formatPrice.js';

const ViewProductModal = ({ open, onClose, productId }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const product = useSelector((state) => state.products.product);

  useEffect(() => {
    console.log(productId);
    dispatch(getProductById(productId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(product);

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
    onClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => onClose()}>
        <Paper
          elevation={3}
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 p-8'>
          <h2 className='uppercase text-center font-semibold text-sky-600 text-2xl pb-2'>
            {t('text.product-detail')}
          </h2>
          <Divider className='w-full bg-gray-800 h-1 rounded-lg' />

          <div className='flex justify-between items-center pt-6'>
            <img
              src={import.meta.env.VITE_IMG_URL + product?.image}
              alt=''
            />
            <Stack spacing={2}>
              <div className='flex justify-start items-center gap-4'>
                {t('text.product-code')}:
                <span className='text-xl font-semibold'>{product?._id}</span>
              </div>

              <div className='flex justify-start items-center gap-4'>
                {t('text.product-name')}:
                <span className='text-xl font-semibold'>{product?.name}</span>
              </div>

              <div className='flex justify-start items-center gap-4'>
                {t('text.original-price')}:
                <span className='text-xl font-semibold'>
                  {formatPrice(product?.old_price, 'VND')}
                </span>
              </div>

              <div className='flex justify-start items-center gap-4'>
                {t('text.saled-price')}:
                <span className='text-xl font-semibold'>
                  {formatPrice(product?.new_price, 'VND')}
                </span>
              </div>

              <div className='flex justify-start items-center gap-4'>
                {t('text.category')}:
                <span className='text-xl font-semibold'>
                  {product?.category}
                </span>
              </div>

              <Button
                variant='contained'
                color='error'
                onClick={() => handleDeleteProduct(product._id)}>
                {t('button.remove')}
              </Button>
            </Stack>
          </div>
        </Paper>
      </Modal>
    </div>
  );
};

ViewProductModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  productId: PropTypes.string.isRequired,
};

export default ViewProductModal;

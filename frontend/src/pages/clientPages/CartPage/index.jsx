import { useTranslation } from 'react-i18next';
import DataTable from '../../../components/DataTable';
import CartTotal from './components/CartTotal';
import PromotionInput from './components/PromotionInput';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCart, removeFromCart } from '../../../redux/thunks/cartThunk.js';
import formatPrice from '../../../helpers/formatPrice.js';

const CartPage = () => {
  const { t } = useTranslation();

  const columns = [
    // { id: 'id', type: 'text', label: t('text.id') },
    { id: 'product', type: 'image', label: t('text.product') },
    { id: 'productName', type: 'text', label: t('text.product-name') },
    { id: 'price', type: 'text', label: t('text.price') },
    { id: 'quantity', type: 'text', label: t('text.quantity') },
    { id: 'total', type: 'text', label: t('text.total') },
  ];

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const cart = useSelector((state) => state.cart.cart);

  useEffect(() => {
    dispatch(getCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = cartItems.map((item) => ({
    id: item.product._id,
    product: item.product.image,
    productName: item.product.name,
    price: formatPrice(item.product.new_price, 'VND'),
    quantity: item.quantity,
    total: formatPrice(item.totalPrice, 'VND'),
  }));

  const handleDeleteItem = (product) => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className='px-7 py-16 bg-gray-50'>
      <DataTable
        title={t('text.cart')}
        columns={columns}
        data={data}
        sortable={true}
        filterable={true}
        actions={{ delete: true, view: false }}
        pagination={{ rowsPerPageOptions: [5, 10, 25], defaultRowsPerPage: 5 }}
        showIndex={true}
        onDelete={handleDeleteItem}
      />
      <div className='flex items-start justify-start gap-40 py-20'>
        <CartTotal
          className='w-1/2'
          total={cart.totalCartPrice}
        />
        <div className='flex flex-col justify-between items-center gap-20'>
          <PromotionInput />
          <Link
            to={'/cart/checkout'}
            className='w-full'>
            <Button
              className='w-full'
              variant='contained'
              size='large'>
              {t('button.checkout')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

import { useTranslation } from 'react-i18next';
import DataTable from '../../../components/DataTable';
import CartTotal from './components/CartTotal';
import PromotionInput from './components/PromotionInput';

const data = [
  {
    product: 'Filter',
    productName: 'Men Green Solid Zhipperd Jacket',
    price: 100,
    quantity: 5,
    total: 500,
  },
  {
    product: 'John Doe',
    productName: 'Men Red Solid Zhipperd Jacket',
    price: 100,
    quantity: 3,
    total: 300,
  },
  {
    product: 'John Doe',
    productName: 'Men blue Solid Zhipperd Jacket',
    price: 100,
    quantity: 7,
    total: 700,
  },
  {
    product: 'Filter',
    productName: 'Men Green Solid Zhipperd Jacket',
    price: 100,
    quantity: 5,
    total: 500,
  },
  {
    product: 'John Doe',
    productName: 'Men Red Solid Zhipperd Jacket',
    price: 100,
    quantity: 3,
    total: 300,
  },
  {
    product: 'John Doe',
    productName: 'Men blue Solid Zhipperd Jacket',
    price: 100,
    quantity: 7,
    total: 700,
  },
  {
    product: 'Filter',
    productName: 'Men Green Solid Zhipperd Jacket',
    price: 100,
    quantity: 5,
    total: 500,
  },
  {
    product: 'John Doe',
    productName: 'Men Red Solid Zhipperd Jacket',
    price: 100,
    quantity: 3,
    total: 300,
  },
  {
    product: 'John Doe',
    productName: 'Men blue Solid Zhipperd Jacket',
    price: 100,
    quantity: 7,
    total: 700,
  },
];

const CartPage = () => {
  const { t } = useTranslation();

  const columns = [
    { id: 'product', label: t('text.product') },
    { id: 'productName', label: t('text.product-name') },
    { id: 'price', label: t('text.price') },
    { id: 'quantity', label: t('text.quantity') },
    { id: 'total', label: t('text.total') },
  ];

  return (
    <div className='px-7 py-16 bg-gray-50'>
      <DataTable
        title={t('text.cart')}
        columns={columns}
        data={data}
        sortable={true}
        filterable={true}
        actions={{ delete: true, view: true }}
        pagination={{ rowsPerPageOptions: [5, 10, 25], defaultRowsPerPage: 5 }}
        showIndex={true}
      />
      <div className='flex items-start justify-start gap-40 py-20'>
        <CartTotal className='w-1/2' />
        <PromotionInput />
      </div>
    </div>
  );
};

export default CartPage;

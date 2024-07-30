import { useDispatch, useSelector } from 'react-redux';
import { DataTable } from '../../../components';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import {
  deleteProduct,
  getAllProducts,
} from '../../../redux/thunks/productThunk';
import ViewProductModal from './components/ViewProductModal';

const AdminProductPage = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.products.productList);

  const [open, setOpen] = useState(false);
  const [productId, setProductId] = useState('');

  useEffect(() => {
    dispatch(getAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    { id: 'image', type: 'image', label: t('text.image') },
    { id: 'name', type: 'text', label: t('text.product-name') },
    { id: 'category', type: 'text', label: t('text.category') },
    { id: 'old_price', type: 'text', label: t('text.original-price') },
    { id: 'new_price', type: 'text', label: t('text.saled-price') },
  ];

  const handleDeleteProduct = (product) => {
    dispatch(deleteProduct(product._id));
  };

  const handleViewProduct = (product) => {
    console.log('view product: ', product._id);
    setProductId(product._id);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setProductId('');
  };

  return (
    <div>
      <DataTable
        title={t('text.product')}
        columns={columns}
        data={productList}
        sortable={true}
        filterable={true}
        actions={{ delete: true, view: true }}
        pagination={{ rowsPerPageOptions: [4, 8, 12], defaultRowsPerPage: 4 }}
        showIndex={true}
        onDelete={handleDeleteProduct}
        onView={handleViewProduct}
      />
      {productId && (
        <ViewProductModal
          open={open}
          onClose={handleCloseModal}
          productId={productId}
        />
      )}
    </div>
  );
};

export default AdminProductPage;

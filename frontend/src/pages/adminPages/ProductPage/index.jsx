import { useDispatch, useSelector } from 'react-redux';
import { DataTable } from '../../../components';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import {
  deleteProduct,
  getAllProducts,
} from '../../../redux/thunks/productThunk';

const AdminProductPage = () => {
  const { t } = useTranslation();

  const productList = useSelector((state) => state.products.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

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
    </div>
  );
};

export default AdminProductPage;

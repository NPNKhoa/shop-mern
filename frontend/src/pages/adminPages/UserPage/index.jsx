import { useDispatch, useSelector } from 'react-redux';
import { DataTable } from '../../../components';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { getAllUsers } from '../../../redux/thunks/userThunk';

const AdminUserPage = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getAllUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    { id: 'name', type: 'text', label: t('text.fullname') },
    { id: 'email', type: 'text', label: t('text.email') },
    { id: 'phone', type: 'text', label: t('text.phone') },
    // { id: 'isAdmin', type: 'boolean', label: t('text.admin') },
  ];

  return (
    <div>
      <DataTable
        title={t('text.user')}
        columns={columns}
        data={users}
        sortable={true}
        filterable={true}
        actions={{ delete: false, view: false }}
        pagination={{ rowsPerPageOptions: [4, 8, 12], defaultRowsPerPage: 4 }}
        showIndex={true}
      />
    </div>
  );
};

export default AdminUserPage;

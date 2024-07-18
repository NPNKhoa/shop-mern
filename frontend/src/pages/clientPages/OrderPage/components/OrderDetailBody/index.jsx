import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const OrderDetailBody = () => {
  const { t } = useTranslation();

  return (
    <div className='my-6'>
      <span className='text-lg font-medium'>{t('text.product')}:</span>
      <Table
        sx={{ marginBottom: '2rem' }}
        aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ fontWeight: '600' }}
              align='center'>
              {t('text.product')}
            </TableCell>
            <TableCell
              sx={{ fontWeight: '600' }}
              align='left'>
              {t('text.product-name')}
            </TableCell>
            <TableCell
              sx={{ fontWeight: '600' }}
              align='center'>
              {t('text.price')}
            </TableCell>
            <TableCell
              sx={{ fontWeight: '600' }}
              align='center'>
              {t('text.quantity')}
            </TableCell>
            <TableCell
              sx={{ fontWeight: '600' }}
              align='center'>
              {t('text.total-price')}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align='center'>{row.calories}</TableCell>
              <TableCell align='left'>{row.name}</TableCell>
              <TableCell align='center'>{row.fat}</TableCell>
              <TableCell align='center'>{row.carbs}</TableCell>
              <TableCell align='center'>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div>
        <span className='text-lg font-medium'>{t('text.order-total')}: </span>
        <span className='text-2xl font-semibold'>20.000.000VND</span>
      </div>
    </div>
  );
};

export default OrderDetailBody;

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import formatPrice from '../../../../../helpers/formatPrice';

const OrderDetailBody = ({ order }) => {
  const { t } = useTranslation();

  console.log(order);

  const createData = (name, price, quantity, totalPrice) => {
    return { name, price, quantity, totalPrice };
  };

  const rows = order?.orderItems?.map((item) =>
    createData(
      item?.product?.name,
      item?.product?.new_price,
      item?.quantity,
      item?.totalPrice
    )
  );

  console.log(rows);

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
          {rows?.map((row) => (
            <TableRow key={row?.name}>
              <TableCell align='left'>{row?.name}</TableCell>
              <TableCell align='center'>
                {formatPrice(row?.price, 'VND')}
              </TableCell>
              <TableCell align='center'>{row?.quantity}</TableCell>
              <TableCell align='center'>
                {formatPrice(row?.totalPrice, 'VND')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div>
        <span className='text-lg font-medium'>{t('text.order-total')}: </span>
        <span className='text-2xl font-semibold'>
          {formatPrice(order?.totalPrice, 'VND')}
        </span>
      </div>
    </div>
  );
};

OrderDetailBody.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrderDetailBody;

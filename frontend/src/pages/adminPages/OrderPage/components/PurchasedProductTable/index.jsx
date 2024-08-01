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

const PurchasedProductTable = ({ orderItems }) => {
  const { t } = useTranslation();

  const createData = (name, price, quantity, totalPrice) => {
    return { name, price, quantity, totalPrice };
  };

  const rows = orderItems?.map((item) =>
    createData(
      item?.product?.name,
      item?.product?.new_price,
      item?.quantity,
      item?.totalPrice
    )
  );

  return (
    <div>
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
          {rows?.map((row, index) => (
            <TableRow key={`${row?.name}-${index}`}>
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
    </div>
  );
};

PurchasedProductTable.propTypes = {
  orderItems: PropTypes.array,
};

export default PurchasedProductTable;

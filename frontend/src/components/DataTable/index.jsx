import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
  Toolbar,
  TextField,
  IconButton,
  Tooltip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

const DataTable = ({
  title,
  columns,
  data,
  sortable = false,
  filterable = false,
  actions = { delete: false, view: false },
  pagination = { rowsPerPageOptions: [5, 10, 25], defaultRowsPerPage: 5 },
  showIndex = false,
}) => {
  const { t } = useTranslation();

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('');
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pagination.defaultRowsPerPage);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(filter.toLowerCase())
    )
  );

  const sortedData = filteredData.sort((a, b) => {
    if (orderBy) {
      if (a[orderBy] < b[orderBy]) {
        return order === 'asc' ? -1 : 1;
      }
      if (a[orderBy] > b[orderBy]) {
        return order === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });

  const paginatedData = sortedData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper
      elevation={3}
      className='my-4'>
      <Toolbar>
        <h3
          id='tableTitle'
          className='uppercase font-semibold text-2xl text-sky-500'>
          {title}
        </h3>
        {filterable && (
          <TextField
            variant='outlined'
            margin='normal'
            placeholder={`${t('text.filters')}...`}
            onChange={handleFilterChange}
            value={filter}
            style={{ marginLeft: 'auto' }}
            size='small'
          />
        )}
      </Toolbar>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow className='bg-sky-100'>
              {showIndex && (
                <TableCell>
                  <span className='font-semibold text-base'>#</span>
                </TableCell>
              )}
              {columns.map((column) => (
                <TableCell key={column.id}>
                  {sortable ? (
                    <TableSortLabel
                      active={orderBy === column.id}
                      direction={orderBy === column.id ? order : 'asc'}
                      onClick={() => handleRequestSort(column.id)}>
                      <span className='font-semibold text-base'>
                        {column.label}
                      </span>
                    </TableSortLabel>
                  ) : (
                    <span className='font-semibold text-base'>
                      {column.label}
                    </span>
                  )}
                </TableCell>
              ))}
              {(actions.delete || actions.view) && (
                <TableCell align='center'>
                  <span className='font-semibold text-base'>
                    {t('text.actions')}
                  </span>
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {showIndex && (
                  <TableCell>{page * rowsPerPage + rowIndex + 1}</TableCell>
                )}
                {columns.map((column) => (
                  <TableCell key={column.id}>{row[column.id]}</TableCell>
                ))}
                {(actions.delete || actions.view) && (
                  <TableCell align='center'>
                    {actions.view && (
                      <Tooltip title={t('text.view')}>
                        <IconButton onClick={() => console.log('View', row)}>
                          <VisibilityIcon />
                        </IconButton>
                      </Tooltip>
                    )}
                    {actions.delete && (
                      <Tooltip title={t('text.delete')}>
                        <IconButton onClick={() => console.log('Delete', row)}>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    )}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={pagination.rowsPerPageOptions}
        component='div'
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

DataTable.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortable: PropTypes.bool,
  filterable: PropTypes.bool,
  actions: PropTypes.shape({
    delete: PropTypes.bool,
    view: PropTypes.bool,
  }),
  pagination: PropTypes.shape({
    rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
    defaultRowsPerPage: PropTypes.number,
  }),
  showIndex: PropTypes.bool,
};

export default DataTable;

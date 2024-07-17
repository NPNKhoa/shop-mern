import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PropTypes from 'prop-types';
import { Breadcrumbs } from '@mui/material';

const CustomBreadcrumbs = ({ productType, productName }) => {
  const { t } = useTranslation();

  const breadcrumbs = [
    <Link
      underline='hover'
      key='1'
      color='inherit'
      to={'/'}>
      {t('text.home')}
    </Link>,
    <Link
      underline='hover'
      key='2'
      color='inherit'
      to='/'>
      {productType}
    </Link>,
    <h3
      key='3'
      color='text.primary'>
      {productName}
    </h3>,
  ];

  return (
    <div className='px-7 py-4'>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize='small' />}
        aria-label='breadcrumb'>
        {breadcrumbs}
      </Breadcrumbs>
    </div>
  );
};

CustomBreadcrumbs.propTypes = {
  productType: PropTypes.any,
  productName: PropTypes.any,
};

export default CustomBreadcrumbs;

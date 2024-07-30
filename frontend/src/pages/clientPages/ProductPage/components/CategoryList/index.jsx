import { Chip } from '@mui/material';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const CategoryList = ({ categoryList }) => {
  return (
    <>
      {categoryList?.map((category) => (
        <Chip
          key={`${uuidv4()}-${category}`}
          label='Man'
          color='primary'
        />
      ))}
    </>
  );
};

CategoryList.propTypes = {
  categoryList: PropTypes.array,
};

export default CategoryList;

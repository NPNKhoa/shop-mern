import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NumericFormat } from 'react-number-format';

const StyledCard = styled(Card)`
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Product = ({ product }) => {
  return (
    <StyledCard className='sm:w-2/5 md:w-1/5'>
      <Link
        to={`/product/${product._id}`}
        className='w-full'>
        <CardActionArea>
          <CardMedia
            component='img'
            className='w-full'
            image={import.meta.env.VITE_IMG_URL + product.image}
            alt={product.name}
          />

          <CardContent sx={{ padding: '12px' }}>
            <h3 className='font-bold text-2xl truncate overflow-hidden whitespace-nowrap'>
              {product.name}
            </h3>

            <div className='flex justify-between items-center font-semibold text-xl'>
              <NumericFormat
                value={product.new_price}
                displayType={'text'}
                thousandSeparator={true}
                suffix={'VND'}
              />
            </div>
            <div className='flex justify-between items-center line-through text-slate-600 font-thin'>
              <NumericFormat
                value={product.old_price}
                displayType={'text'}
                thousandSeparator={true}
                suffix={'VND'}
              />
            </div>
            <Typography
              variant='body2'
              color='text.secondary'>
              {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </StyledCard>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;

import { Card, CardActions, IconButton } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styled from 'styled-components';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

const StyledCard = styled(Card)`
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Product = () => {
  const product = {
    id: 123456,
    name: 'iPhone XS Max',
    image: '/images/product_13.png',
    description: 'iPhone XS Max 6GB/256GB',
    price: '10.000.000đ',
    discount: '5%',
    sold: '1000+',
    rate: '4.6',
  };

  return (
    <StyledCard className='sm:w-2/5 md:w-1/5'>
      <Link
        to={`/product/${product.id}`}
        className='w-full'>
        <CardActionArea>
          <CardMedia
            component='img'
            className='w-full'
            image={product.image}
            alt={product.name}
          />

          <CardContent sx={{ padding: '12px' }}>
            <h3 className='font-bold text-2xl'>{product.name}</h3>

            <div className='flex justify-between items-center font-semibold text-xl'>
              <span>{product.price}</span>
            </div>
            <div className='flex justify-between items-center line-through text-slate-600 font-thin'>
              <span>{product.price}</span>
            </div>
            <Typography
              variant='body2'
              color='text.secondary'>
              {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>

      <CardActions sx={{ padding: '0' }}>
        <IconButton>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </StyledCard>
  );
};

export default Product;

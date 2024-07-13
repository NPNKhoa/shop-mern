import { Card, CardActions, IconButton } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const StyledCard = styled(Card)`
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Product = () => {
  const { t } = useTranslation();
  const product = {
    name: 'iPhone XS Max',
    image: '/images/iphonexsm.webp',
    description: 'iPhone XS Max 6GB/256GB',
    price: '10.000.000đ',
    discount: '5%',
    sold: '1000+',
    rate: '4.6',
  };

  return (
    <StyledCard className='sm:w-2/5 md:w-1/6'>
      <CardActionArea>
        <CardMedia
          component='img'
          className='w-full'
          image={product.image}
          alt={product.name}
        />

        <CardContent sx={{ padding: '12px' }}>
          <Typography
            gutterBottom
            variant='h5'
            component='div'>
            {product.name}
          </Typography>
          <div className='flex items-center gap-2 text-gray-600'>
            <span className='flex items-center'>
              <span>{product.rate}</span>
              <StarIcon sx={{ color: 'yellow' }} />
            </span>
            |<span>{t('text.sold') + ' ' + product.sold}</span>
          </div>
          <Typography
            variant='h6'
            color='red'
            className='flex justify-between items-center'>
            <span>{product.price}</span>
            <span className='text-base'>-{product.discount}</span>
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'>
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ padding: '0' }}>
        <IconButton>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </StyledCard>
  );
};

export default Product;

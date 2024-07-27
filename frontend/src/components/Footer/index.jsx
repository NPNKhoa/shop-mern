import { Link } from 'react-router-dom';
import { Fab } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import Divider from '@mui/material/Divider';

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8 p-10 pb-4 bg-blue-100'>
      <h1 className='text-blue-600 logo text-4xl mb-5'>
        <Link to={'/'}>SHOPMERN</Link>
      </h1>
      <div>
        <span className='p-3 mx-4 hover:cursor-pointer'>Company</span>
        <span className='p-3 mx-4 hover:cursor-pointer'>Product</span>
        <Link
          to={'/admin/login'}
          className='p-3 mx-4 text-xl font-semibold text-sky-800 hover:cursor-pointer hover:text-2xl'>
          Admin
        </Link>
        <span className='p-3 mx-4 hover:cursor-pointer'>About</span>
        <span className='p-3 mx-4 hover:cursor-pointer'>Contact</span>
      </div>
      <div>
        <Link
          to={'https://facebook.com/nyka1603'}
          className='p-1 mx-4 hover:cursor-pointer'>
          <FacebookIcon />
        </Link>
        <Link
          to={'https://facebook.com/nyka1603'}
          className='p-1 mx-4 hover:cursor-pointer'>
          <InstagramIcon />
        </Link>
        <Link
          to={'https://facebook.com/nyka1603'}
          className='p-1 mx-4 hover:cursor-pointer'>
          <XIcon />
        </Link>
      </div>
      <Fab
        color='primary'
        href='#'>
        <ArrowUpwardIcon />
      </Fab>
      <Divider className='w-full bg-gray-800 h-1 rounded-lg' />
      <div>Copyright @ 2024 - All Right Reserved</div>
    </div>
  );
};

export default Footer;

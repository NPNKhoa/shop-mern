import Button from '@mui/material/Button';

const Header = () => {
  return (
    <div className='w-full flex justify-between items-center bg-blue-100 p-4'>
      <h1
        id='logo'
        className='text-blue-600'>
        SHOPMERN
      </h1>
      <Button variant='contained'>Login</Button>
    </div>
  );
};

export default Header;

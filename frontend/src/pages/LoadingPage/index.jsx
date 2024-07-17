import { CircularProgress } from '@mui/material';

const LoadingPage = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-white'>
      <CircularProgress color='info' />
    </div>
  );
};

export default LoadingPage;

import OrderInforInput from './components/OrderInforInput';
import OrderOverview from './components/OrderOverview';

const CheckOutPage = () => {
  return (
    <div className='bg-gray-100 px-7 py-16 w-full'>
      <div className='flex items-start justify-between'>
        <OrderOverview className='w-1/3' />
        <OrderInforInput className='w-1/2' />
      </div>
    </div>
  );
};

export default CheckOutPage;

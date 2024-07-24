import { Link, useParams } from 'react-router-dom';

const NavBar = () => {
  const { type: productType } = useParams();

  const selectedTab = 'border-b-sky-400 border-b-2 font-semibold';

  const arr = [
    {
      value: 'men',
      label: 'Men',
    },
    {
      value: 'women',
      label: 'Women',
    },
    {
      value: 'kids',
      label: 'Kids',
    },
  ];

  return (
    <div className='w-1/3 flex justify-around items-center gap-6 py-2 px-20'>
      {arr.map((item, index) => (
        <Link
          key={index}
          to={`/products/${item.value}`}
          className={`py-2 ${
            productType === item.label.toLowerCase() && selectedTab
          }`}>
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;

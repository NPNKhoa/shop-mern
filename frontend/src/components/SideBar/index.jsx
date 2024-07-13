import { FormControlLabel, Radio, RadioGroup, Rating } from '@mui/material';

const SideBar = () => {
  const sidebarContent = (type, options) => {
    switch (type) {
      case 'text':
        return (
          <>
            <h3 className='text-xl uppercase font-semibold'>{type}</h3>
            {options.map((option, index) => (
              <div
                key={index}
                className='flex flex-col justify-center items-start px-2 py-4 w-full'>
                {option}
              </div>
            ))}
          </>
        );
      case 'radio':
        return (
          <>
            <h3 className='text-xl uppercase font-semibold'>{type}</h3>
            {options.map((option, index) => (
              <RadioGroup
                key={index}
                defaultValue='optionA'>
                <FormControlLabel
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                />
              </RadioGroup>
            ))}
          </>
        );
      case 'star':
        return (
          <>
            <h3 className='text-xl uppercase font-semibold'>{type}</h3>
            {options.map((option, index) => (
              <div
                key={index}
                className='flex gap-4 justify-start items-center px-2 py-4 w-full'>
                <Rating
                  value={option}
                  readOnly
                />
                <span>{option} sao</span>
              </div>
            ))}
          </>
        );
      case 'price':
        return (
          <>
            <h3 className='text-xl uppercase font-semibold'>{type}</h3>
            {options.map((option, index) => (
              <div
                key={index}
                className='flex flex-col justify-center items-start px-2 py-4 w-full'>
                {option.from === 0 ? (
                  <span>Dưới {option.to}</span>
                ) : option.to === 0 ? (
                  <span>Trên {option.from}</span>
                ) : (
                  <span>
                    Từ {option.from} đến {option.to}
                  </span>
                )}
              </div>
            ))}
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <div className='flex flex-col justify-center items-start gap-4 rounded-md bg-white p-3 w-1/5'>
      {sidebarContent('text', ['TV', 'Tủ lạnh', 'Máy giặt', 'Máy lạnh'])}
      {sidebarContent('radio', [
        {
          value: 'optionA',
          label: 'Option A',
        },
        {
          value: 'optionB',
          label: 'Option B',
        },
        {
          value: 'optionC',
          label: 'Option C',
        },
      ])}
      {sidebarContent('star', [1, 2, 3, 4, 5])}
      {sidebarContent('price', [
        {
          from: 0,
          to: 500000,
        },
        {
          from: 500000,
          to: 1000000,
        },
        {
          from: 1000000,
          to: 0,
        },
      ])}
    </div>
  );
};

export default SideBar;

import { useTranslation } from 'react-i18next';

const NumberInput = () => {
  const { t } = useTranslation();

  return (
    <div className='w-2/5'>
      <input
        type='number'
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5'
        placeholder={t('text.quantity')}
      />
    </div>
  );
};

export default NumberInput;

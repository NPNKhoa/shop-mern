import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const NumberInput = ({ value, onChange }) => {
  const { t } = useTranslation();

  return (
    <div className='w-2/5'>
      <input
        type='number'
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5'
        placeholder={t('text.quantity')}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
};

NumberInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number,
};

export default NumberInput;

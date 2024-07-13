import { Switch } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const [checked, setChecked] = useState(i18n.language === 'vi');

  useEffect(() => {
    setChecked(i18n.language === 'vi');
  }, [i18n.language]);

  const handleChange = () => {
    const newLanguage = checked ? 'en' : 'vi';
    i18n.changeLanguage(newLanguage);
    setChecked(!checked);
  };

  return (
    <div className='flex justify-center items-center'>
      <span>EN</span>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <span>VI</span>
    </div>
  );
};

export default LanguageSelector;

import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <span className='text-6xl uppercase font-semibold tracking-wider text-blue-900'>
        {t('text.page-not-found')}
      </span>
    </div>
  );
};

export default NotFoundPage;

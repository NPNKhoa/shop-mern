import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import OpenModal from '../OpenModal';
import AddProductForm from '../AddProductForm';

const AdminHeader = ({ type }) => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className='absolute right-0 top-0 w-4/5 bg-gray-100 flex justify-between items-center p-4'>
        <div className='flex justify-between items-center gap-10'>
          <h2 className='uppercase text-3xl text-sky-600 font-semibold'>
            {t(`text.${type}-management`)}
          </h2>
          {type === 'products' && (
            <Button
              variant='contained'
              onClick={() => handleOpen()}>
              {t('button.add')}
            </Button>
          )}
        </div>
        <LanguageSelector />
      </div>
      <OpenModal
        open={open}
        onClose={() => handleClose()}>
        <AddProductForm onCloseModal={handleClose} />
      </OpenModal>
    </>
  );
};

AdminHeader.propTypes = {
  type: PropTypes.any,
};

export default AdminHeader;

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function ConfirmationDialog({ title, content, open, onConfirm, onClose }) {
  const { t } = useTranslation();

  const field = title.split(' ')[1];

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>{t('button.cancel')}</Button>
          <Button
            variant='contained'
            onClick={() => onConfirm(field)}>
            {t('button.accept')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

ConfirmationDialog.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ConfirmationDialog;
